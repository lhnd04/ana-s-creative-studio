import Reveal from "./Reveal";
import { WhatsappIcon, InstagramIcon } from "./icons";
import { SALON_INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site-constants";

// TODO: conferir a descrição exata dos serviços do Salão do Nego (@negohair)
// no Instagram dele antes de publicar — não inventar serviços além do que
// estiver confirmado lá.
export default function SalonCTA() {
  return (
    <section id="contato" className="bg-skin py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal className="relative mx-auto h-[360px] w-full max-w-[520px] md:h-[560px]">
          <div className="absolute inset-0 overflow-hidden rounded-[32px] shadow-xl">
            <img
              src="/images/rodape.jpg"
              alt="Ana Prado ao lado do proprietário do Salão do Nego"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 25%" }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-[32px]"
            style={{
              background: "linear-gradient(0deg, #EFDFD1 0%, rgba(239,223,209,0) 100%)",
            }}
          />
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <span className="font-sans text-[13px] uppercase tracking-[0.3em] text-gold">
            Salão do Nego
          </span>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-muted-ink">
            Atendo no Salão do Nego, um salão conceituado da cidade. A parceria vem gerando ótimos
            resultados: a cliente chega e sai pronta, com penteado, unhas e maquiagem feitos no
            mesmo lugar, em um só momento.
          </p>
          <a
            href={SALON_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-sans text-[13px] uppercase tracking-[0.08em] text-ink underline decoration-gold-dark decoration-2 underline-offset-4 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <InstagramIcon className="h-4 w-4" />
            Conheça o trabalho do salão no Instagram
          </a>
        </Reveal>

        <Reveal delay={250} className="mt-16">
          <h2 className="font-serif text-[36px] text-ink md:text-[48px]">
            Vamos realçar a sua beleza?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-muted-ink">
            Agende seu horário e viva a experiência de ser maquiada com técnica, produtos testados e
            atenção a cada detalhe.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark to-gold px-8 py-4 font-sans text-[13px] uppercase tracking-[0.1em] text-ink shadow-md transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <WhatsappIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
