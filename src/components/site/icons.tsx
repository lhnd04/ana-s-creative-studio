export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GraduationCapIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 9.5 12 5l10 4.5-10 4.5L2 9.5Z" strokeLinejoin="round" />
      <path d="M6 11.6v4.2c0 1 2.69 2.2 6 2.2s6-1.2 6-2.2v-4.2" strokeLinejoin="round" />
      <path d="M21 9.5v5.3" strokeLinecap="round" />
    </svg>
  );
}

export function CertificateIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="6" />
      <path d="m8.2 14.2-1.3 6.1 4.6-2.5 4.6 2.5-1.3-6.1" strokeLinejoin="round" />
      <path d="m9.3 9 1.8 1.8 3.4-3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5 5 19" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsappIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.86.51 3.6 1.4 5.09L2 22l5.08-1.4a9.95 9.95 0 0 0 4.96 1.31h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.2h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.02.83.8-2.94-.2-.3a8.18 8.18 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2Zm4.47-6.07c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.01-.37.11-.49.12-.12.28-.3.42-.46.14-.16.18-.27.28-.45.1-.18.05-.33-.03-.45-.08-.12-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.46.07-.7.33-.24.26-.93.9-.93 2.2 0 1.3.95 2.56 1.08 2.74.13.18 1.8 2.75 4.36 3.75 2.56 1 2.56.67 3.02.63.46-.04 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.24-.16-.48-.28Z" />
    </svg>
  );
}
