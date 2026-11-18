import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import Lightbox from "./Lightbox";

const TOTAL = 11;
const IMAGES = Array.from(
  { length: TOTAL },
  (_, i) => `/images/portfolio-${String(i + 1).padStart(2, "0")}.jpg`,
);

function shortestDelta(from: number, to: number, total: number) {
  let delta = (to - from) % total;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
}

type SlideConfig = {
  scale: number;
  opacity: number;
  z: number;
  blur: number;
  bright: number;
  xPercent: number;
};

function configFor(absDelta: number, delta: number): SlideConfig {
  if (absDelta === 0) {
    return { scale: 1, opacity: 1, z: 50, blur: 0, bright: 1, xPercent: 0 };
  }
  if (absDelta === 1) {
    return { scale: 0.82, opacity: 0.6, z: 40, blur: 1, bright: 0.85, xPercent: delta * 58 };
  }
  return { scale: 0.68, opacity: 0.3, z: 30, blur: 2, bright: 0.7, xPercent: delta * 98 };
}

export default function Coverflow() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [paused, setPaused] = useState(false);

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % TOTAL) + TOTAL) % TOTAL);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused || lightboxOpen) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TOTAL);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, lightboxOpen]);

  useEffect(() => {
    if (lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, lightboxOpen]);

  useEffect(() => {
    [index - 2, index - 1, index + 1, index + 2].forEach((i) => {
      const src = IMAGES[((i % TOTAL) + TOTAL) % TOTAL];
      if (!src) return;
      const img = new window.Image();
      img.src = src;
    });
  }, [index]);

  function handleTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    if (!t) return;
    touchStart.current = { x: t.clientX, y: t.clientY };
    setPaused(true);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    setPaused(false);
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  }

  return (
    <div>
      <div
        className="relative mx-auto h-[66vw] max-h-[420px] min-h-[320px] w-full max-w-[720px] md:h-[480px] md:max-h-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {IMAGES.map((src, i) => {
          const delta = shortestDelta(index, i, TOTAL);
          const absDelta = Math.abs(delta);
          if (absDelta > 2) return null;

          const cfg = configFor(absDelta, delta);
          const isCenter = absDelta === 0;

          return (
            <button
              key={src}
              type="button"
              onClick={() => (isCenter ? setLightboxOpen(true) : goTo(i))}
              aria-label={
                isCenter ? `Ampliar foto ${i + 1} do portfólio` : `Ver foto ${i + 1} do portfólio`
              }
              className="absolute left-1/2 top-1/2 h-[66vw] max-h-[420px] min-h-[320px] w-[72vw] max-w-[320px] overflow-hidden rounded-[20px] md:h-[440px] md:max-h-none md:w-[330px] md:max-w-none"
              style={{
                transform: `translate(-50%, -50%) translateX(${cfg.xPercent}%) scale(${cfg.scale})`,
                opacity: cfg.opacity,
                zIndex: cfg.z,
                filter: `brightness(${cfg.bright}) blur(${cfg.blur}px)`,
                transition:
                  "transform 0.55s ease-out, opacity 0.55s ease-out, filter 0.55s ease-out",
                boxShadow: isCenter ? "0 24px 55px rgba(15,13,12,0.35)" : "none",
                border: isCenter ? "3px solid #C9A66B" : "none",
                cursor: isCenter ? "zoom-in" : "pointer",
              }}
            >
              <img
                src={src}
                alt={`Maquiagem realizada por Ana Prado, foto ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 25%" }}
              />
            </button>
          );
        })}

        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute left-0 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg text-gold shadow-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:left-2"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima foto"
          className="absolute right-0 top-1/2 z-[60] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg text-gold shadow-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:right-2"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-6 text-center font-sans text-[12px] uppercase tracking-[0.1em] text-muted-ink">
        {String(index + 1).padStart(2, "0")} / {TOTAL} · Clique na imagem central para ampliar
      </p>

      {lightboxOpen && (
        <Lightbox
          images={IMAGES}
          index={index}
          onClose={() => setLightboxOpen(false)}
          onNavigate={goTo}
        />
      )}
    </div>
  );
}
