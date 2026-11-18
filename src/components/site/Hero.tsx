import Logo from "./Logo";
import { WhatsappIcon, GraduationCapIcon, CertificateIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/site-constants";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[640px] w-full items-stretch overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="absolute inset-0 hero-ambient-zoom">
        <img
          src="/images/hero.jpg"
          alt="Ana Prado, maquiadora profissional, com pincéis de maquiagem"
          loading="eager"
          className="absolute inset-0 hidden h-full w-full object-cover hero-photo-enter md:block"
          style={{ objectPosition: "72% 20%" }}
        />
        <img
          src="/images/hero.jpg"
          alt="Ana Prado, maquiadora profissional, com pincéis de maquiagem"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover hero-photo-enter md:hidden"
          style={{ objectPosition: "62% 15%" }}
        />
      </div>

      {/* Degradê escuro da esquerda para a direita (desktop) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,13,12,0.88) 0%, rgba(15,13,12,0.55) 32%, rgba(15,13,12,0.12) 58%, rgba(15,13,12,0) 72%)",
        }}
      />
      {/* Toque quente dourado/pele */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(201,166,107,0.18) 0%, rgba(239,223,209,0.08) 38%, rgba(239,223,209,0) 62%)",
        }}
      />
      {/* Degradê escuro de baixo para cima (mobile) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(15,13,12,0.92) 15%, rgba(15,13,12,0.6) 48%, rgba(15,13,12,0.15) 72%, rgba(15,13,12,0) 85%)",
        }}
      />
      {/* Leve vinheta no topo para o logo ficar legível (mobile) */}
      <div
        className="absolute inset-x-0 top-0 h-24 md:hidden"
        style={{
          background: "linear-gradient(180deg, rgba(15,13,12,0.55) 0%, rgba(15,13,12,0) 100%)",
        }}
      />
      {/* Fusão suave com a seção seguinte */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28"
        style={{ background: "linear-gradient(0deg, #FAF6F2 0%, rgba(250,246,242,0) 100%)" }}
      />

      <div className="absolute left-6 top-6 z-10 md:left-10 md:top-8">
        <Logo footer animated className="items-start text-left" />
      </div>

      <div className="relative z-10 flex w-full items-end pb-16 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-6xl px-6 pt-28 md:px-10">
          <div className="max-w-xl">
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.15] text-bg">
              <span className="hero-line block" style={{ animationDelay: "0.15s" }}>
                Realce a sua <span className="gold-shine text-gold-dark">beleza</span>
              </span>
            </h1>

            <p
              className="hero-fade-in mt-6 max-w-md text-[15px] leading-relaxed text-bg/90 md:text-[16px]"
              style={{ animationDelay: "1s" }}
            >
              Apaixonada por maquiagem desde jovem, comecei me maquiando até as pessoas perceberem e
              pedirem para eu maquiá-las também. Hoje, perfeccionista em cada detalhe, meu propósito
              é transformar e realçar a beleza de cada mulher com as melhores marcas testadas.
            </p>

            <div
              className="hero-fade-in mt-6 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "1.2s" }}
            >
              <span
                className="badge-in flex items-center gap-2 rounded-full border border-gold-dark/60 bg-footer/35 px-3 py-2 backdrop-blur-sm"
                style={{ animationDelay: "1.3s" }}
              >
                <GraduationCapIcon className="h-4 w-4 gold-glint text-gold-dark" />
                <span className="font-sans text-[10px] uppercase tracking-[0.08em] text-bg md:text-[11px]">
                  Formada pelo Senac · Santo Ângelo
                </span>
              </span>
              <span
                className="badge-in flex items-center gap-2 rounded-full border border-gold-dark/60 bg-footer/35 px-3 py-2 backdrop-blur-sm"
                style={{ animationDelay: "1.45s" }}
              >
                <CertificateIcon className="h-4 w-4 gold-glint text-gold-dark" />
                <span className="font-sans text-[10px] uppercase tracking-[0.08em] text-bg md:text-[11px]">
                  +2 especializações em maquiagem
                </span>
              </span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-fade-in mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold px-8 py-4 font-sans text-[13px] uppercase tracking-[0.1em] text-ink shadow-lg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
              style={{ animationDelay: "1.35s" }}
            >
              <WhatsappIcon className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
