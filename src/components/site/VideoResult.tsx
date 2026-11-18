import Reveal from "./Reveal";
import {
  LipstickDecor,
  BrushDecor,
  PaletteDecor,
  EyeLashesDecor,
  SparkleDecor,
} from "./decor-icons";

export default function VideoResult() {
  return (
    <section className="relative overflow-hidden bg-skin py-20">
      <div className="pointer-events-none absolute inset-0 text-gold-dark" aria-hidden="true">
        <LipstickDecor className="float-a absolute left-[6%] top-[12%] h-12 w-12 opacity-[0.18] md:h-16 md:w-16" />
        <BrushDecor className="float-b absolute right-[8%] top-[18%] h-14 w-14 opacity-[0.15] md:h-20 md:w-20" />
        <PaletteDecor className="float-c absolute left-[12%] bottom-[14%] h-14 w-14 opacity-[0.15] md:h-20 md:w-20" />
        <EyeLashesDecor className="float-a absolute right-[10%] bottom-[10%] h-12 w-12 opacity-[0.18] md:h-16 md:w-16" />
        <SparkleDecor className="float-b absolute left-[45%] top-[6%] h-8 w-8 opacity-[0.2] md:h-10 md:w-10" />
        <SparkleDecor className="float-c absolute right-[38%] bottom-[8%] h-6 w-6 opacity-[0.22] md:h-8 md:w-8" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="font-sans text-[13px] uppercase tracking-[0.3em] text-gold">
            Veja de perto
          </span>
          <p className="mt-3 font-serif text-[22px] text-ink md:text-[26px]">
            Assista ao vídeo e conheça os bastidores
          </p>

          <div className="mx-auto mt-8 w-full max-w-[360px] overflow-hidden rounded-[24px] border border-gold-dark/50 shadow-xl">
            <video
              className="w-full"
              poster="/images/video-resultado-poster.jpg"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/images/video-resultado.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
