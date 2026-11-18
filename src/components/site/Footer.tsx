import Logo from "./Logo";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SALON_INSTAGRAM_HANDLE,
  SALON_INSTAGRAM_URL,
} from "@/lib/site-constants";

export default function Footer() {
  return (
    <footer className="bg-footer py-12 text-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <Logo footer />

          <div className="flex items-center gap-8">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] uppercase tracking-[0.08em] text-bg transition-colors hover:text-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <a
              href={SALON_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] uppercase tracking-[0.08em] text-bg transition-colors hover:text-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
            >
              {SALON_INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-footer-line pt-6 text-center">
          <p className="font-sans text-[12px] text-bg/70">
            © 2026 Ana Prado Make Up · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
