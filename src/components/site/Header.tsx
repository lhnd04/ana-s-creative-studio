import Logo from "./Logo";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site-constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" aria-label="Ana Prado Make Up, início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-[13px] uppercase tracking-[0.08em] text-ink transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center border border-ink px-4 py-2 font-sans text-[12px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:hidden"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
