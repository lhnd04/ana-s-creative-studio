import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const dragOrigin = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);

  function navigate(i: number) {
    setZoomed(false);
    setPan({ x: 0, y: 0 });
    setOrigin("50% 50%");
    onNavigate(i);
  }

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") navigate(index + 1);
      if (e.key === "ArrowLeft") navigate(index - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, onClose]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!zoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  }

  function handleClick() {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setZoomed((z) => !z);
    setPan({ x: 0, y: 0 });
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    const t = e.touches[0];
    if (!t) return;
    touchStart.current = { x: t.clientX, y: t.clientY };
    if (zoomed) dragOrigin.current = { x: t.clientX - pan.x, y: t.clientY - pan.y };
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const t = e.touches[0];
    if (!t) return;
    if (zoomed && dragOrigin.current) {
      const dx = t.clientX - dragOrigin.current.x;
      const dy = t.clientY - dragOrigin.current.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        setDragging(true);
        suppressClick.current = true;
      }
      setPan({ x: dx, y: dy });
    }
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    setDragging(false);
    dragOrigin.current = null;
    if (zoomed) return;
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      suppressClick.current = true;
      navigate(dx < 0 ? index + 1 : index - 1);
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15, 13, 12, 0.96)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da foto do portfólio"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-bg/10 text-bg transition-colors hover:bg-bg/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => navigate(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg/10 text-gold-dark transition-colors hover:bg-bg/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg md:left-6"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => navigate(index + 1)}
        aria-label="Próxima foto"
        className="absolute right-2 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg/10 text-gold-dark transition-colors hover:bg-bg/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg md:right-6"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <div
        className="relative h-[78vh] w-full max-w-3xl select-none"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
        aria-label={zoomed ? "Reduzir zoom" : "Ampliar zoom"}
        style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
      >
        <img
          src={images[index]}
          alt={`Maquiagem realizada por Ana Prado, foto ${index + 1} ampliada`}
          className="absolute inset-0 h-full w-full object-contain"
          style={{
            transform: zoomed
              ? `scale(1.7) translate(${pan.x / 1.7}px, ${pan.y / 1.7}px)`
              : "scale(1)",
            transformOrigin: origin,
            transition: dragging ? "none" : "transform 0.35s ease",
          }}
        />
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-[12px] uppercase tracking-[0.1em] text-bg/80">
        {String(index + 1).padStart(2, "0")} / {images.length}
      </p>
    </div>,
    document.body,
  );
}
