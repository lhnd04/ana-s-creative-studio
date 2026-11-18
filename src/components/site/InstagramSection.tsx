import Reveal from "./Reveal";
import { InstagramIcon } from "./icons";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site-constants";

type InstagramPost = {
  id: string;
  imageUrl: string;
  permalink: string;
  caption: string;
};

// TODO: não há rota de API neste projeto Lovable (TanStack Start/Nitro não expõe
// a antiga rota Next /api/instagram). O carrossel usa as fotos do portfólio como
// fallback. Para puxar o feed real do Instagram, criar uma Supabase Edge Function
// que consulte https://graph.instagram.com/me/media usando INSTAGRAM_ACCESS_TOKEN
// (guardado nos Secrets do Lovable) e chamá-la a partir daqui.
const FALLBACK_ITEMS: InstagramPost[] = Array.from({ length: 8 }, (_, i) => ({
  id: `fallback-${i + 1}`,
  imageUrl: `/images/portfolio-${String(i + 1).padStart(2, "0")}.jpg`,
  permalink: INSTAGRAM_URL,
  caption: "Ver mais no Instagram de Ana Prado",
}));

export default function InstagramSection() {
  const items = FALLBACK_ITEMS;

  return (
    <section id="instagram" className="bg-bg py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="font-sans text-[13px] uppercase tracking-[0.3em] text-gold">
            Instagram
          </span>
          <h2 className="mt-4 font-serif text-[36px] text-ink md:text-[48px]">
            Acompanhe os bastidores
          </h2>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-ink px-6 py-3 font-sans text-[13px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <InstagramIcon className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </Reveal>

        <div
          className="no-scrollbar mt-12 flex gap-5 overflow-x-auto px-2 pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[260px] w-[260px] flex-shrink-0 overflow-hidden rounded-[20px] border border-gold-dark/40 shadow-md transition-transform hover:-translate-y-1"
              style={{ scrollSnapAlign: "center" }}
              aria-label={
                post.caption ? post.caption.slice(0, 80) : "Publicação do Instagram de Ana Prado"
              }
            >
              <img
                src={post.imageUrl}
                alt={
                  post.caption ? post.caption.slice(0, 120) : "Publicação do Instagram de Ana Prado"
                }
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 25%" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
