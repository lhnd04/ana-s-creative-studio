import { useEffect, useRef, useState } from "react";
import { SparkleDecor, BrushDecor } from "./decor-icons";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardWrapRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [scrollTilt, setScrollTilt] = useState(0);

  const reducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const onChange = () => {
      reducedMotion.current = mq.matches;
      if (mq.matches) {
        setTilt({ rx: 0, ry: 0 });
        setParallax({ x: 0, y: 0 });
        setScrollTilt(0);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = cardWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      if (reducedMotion.current) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const vh = window.innerHeight || 1;
      const centerDelta = vh / 2 - (rect.top + rect.height / 2);
      const progress = Math.max(-1, Math.min(1, centerDelta / vh));
      setScrollTilt(progress * 2.5);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reducedMotion.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 2 * 6;
    const rx = -(py - 0.5) * 2 * 6;
    setTilt({ rx, ry });
    setParallax({ x: -(px - 0.5) * 24, y: -(py - 0.5) * 24 });
  }

  function handleMouseLeave() {
    if (reducedMotion.current) return;
    setTilt({ rx: 0, ry: 0 });
    setParallax({ x: 0, y: 0 });
  }

  return (
    <section
      id="sobre"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ perspective: "1200px" }}
    >
      <div
        className="sobre-bg-parallax absolute inset-0"
        style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.1)` }}
      >
        <img
          src="/images/sobre-fundo.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "blur(3px)" }}
        />
      </div>

      {/* Fusão com as seções vizinhas (topo e base) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FAF6F2 0%, rgba(250,246,242,0) 18%, rgba(250,246,242,0) 82%, #FAF6F2 100%)",
        }}
      />
      {/* Camada creme/dourada suave para não competir com o texto */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(239,223,209,0.1) 0%, rgba(201,166,107,0.3) 50%, rgba(239,223,209,0.1) 100%)",
        }}
      />

      {/* Detalhes dourados flutuantes, em diferentes profundidades */}
      <div className="pointer-events-none absolute inset-0 text-gold-dark" aria-hidden="true">
        <SparkleDecor
          className="float-a absolute left-[10%] top-[16%] h-8 w-8 opacity-70"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15,13,12,0.25))" }}
        />
        <SparkleDecor
          className="float-c absolute right-[14%] top-[62%] h-5 w-5 opacity-40"
          style={{ filter: "drop-shadow(0 3px 4px rgba(15,13,12,0.2))" }}
        />
        <BrushDecor
          className="float-b absolute right-[8%] top-[20%] h-12 w-12 opacity-50"
          style={{ filter: "drop-shadow(0 6px 10px rgba(15,13,12,0.25))" }}
        />
        <SparkleDecor
          className="float-b absolute left-[16%] bottom-[14%] h-6 w-6 opacity-50"
          style={{ filter: "drop-shadow(0 3px 5px rgba(15,13,12,0.2))" }}
        />
      </div>

      <div
        className="relative mx-auto max-w-[680px] px-5 md:px-6"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div ref={cardWrapRef} className={`card-enter-3d ${visible ? "is-visible" : ""}`}>
          <div
            className="card-tilt border border-gold-dark/60 px-8 py-12 text-center shadow-[0_30px_60px_-15px_rgba(15,13,12,0.35)] md:px-14 md:py-16"
            style={{
              borderRadius: "24px",
              backgroundColor: "rgba(250,246,242,0.88)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              transform: `rotateX(${tilt.rx + scrollTilt}deg) rotateY(${tilt.ry}deg)`,
            }}
          >
            <span className="font-sans text-[13px] uppercase tracking-[0.3em] text-gold">
              Sobre
            </span>
            <h2 className="mt-4 font-serif text-[32px] text-ink md:text-[40px]">
              A maquiagem sempre fez parte de mim
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-ink">
              Me maquio desde criança, e a maquiagem entrou na minha vida de forma natural. Muita
              gente pedia para eu maquiar e sempre perguntava por que eu não trabalhava com isso. A
              vida foi se ajustando até me trazer aqui.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-ink">
              Sou mãe de dois filhos, casada e perfeccionista em cada detalhe. Estudei no Senac de
              Santo Ângelo e fiz mais duas especializações em maquiagem. Trabalho com as melhores
              marcas para cada etapa, todas testadas, porque cada pele pede o produto certo. Meu
              propósito é que cada mulher se olhe no espelho e se sinta mais bonita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
