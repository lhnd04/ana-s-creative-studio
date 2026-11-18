import { WhatsappIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/site-constants";

export default function WhatsappFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-floating whatsapp-pulse fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-ink shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:bottom-8 md:right-8"
      style={{ background: "linear-gradient(135deg, #C9A66B 0%, #86672C 100%)" }}
    >
      <WhatsappIcon className="h-6 w-6" />
    </a>
  );
}
