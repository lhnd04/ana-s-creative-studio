import Reveal from "./Reveal";
import Coverflow from "./Coverflow";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-skin py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="font-sans text-[13px] uppercase tracking-[0.3em] text-gold">
            Portfólio
          </span>
          <h2 className="mt-4 font-serif text-[36px] text-ink md:text-[48px]">
            Conheça algumas das minhas maquiagens
          </h2>
        </Reveal>

        <div className="mt-12">
          <Coverflow />
        </div>
      </div>
    </section>
  );
}
