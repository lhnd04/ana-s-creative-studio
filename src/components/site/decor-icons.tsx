import type { CSSProperties } from "react";

type DecorProps = { className?: string; style?: CSSProperties };

export function LipstickDecor({ className = "w-10 h-10", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M19 6h10l2 10-7 6-7-6 2-10Z" strokeLinejoin="round" />
      <path d="M17 22h14l-2 18a5 5 0 0 1-5 4.5h0a5 5 0 0 1-5-4.5l-2-18Z" strokeLinejoin="round" />
      <path d="M21 22v20M27 22v20" />
    </svg>
  );
}

export function BrushDecor({ className = "w-10 h-10", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M30 6 42 18 24 36l-6-6L30 6Z" strokeLinejoin="round" />
      <path d="M18 30 8 40a4 4 0 0 0 0 6 4 4 0 0 0 6 0l10-10" strokeLinejoin="round" />
      <path d="M24 12 36 24" />
    </svg>
  );
}

export function PaletteDecor({ className = "w-10 h-10", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M24 6C13 6 5 14 5 24c0 6 4 9 8 9 2 0 3-1.3 3-3s-2-2.5-2-5 3-4 7-4c9 0 15-5 15-11C36 7 31 6 24 6Z"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18" r="1.6" />
      <circle cx="24" cy="14" r="1.6" />
      <circle cx="31" cy="18" r="1.6" />
    </svg>
  );
}

export function EyeLashesDecor({ className = "w-10 h-10", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M6 26c6-10 14-14 18-14s12 4 18 14c-6 10-14 14-18 14S12 36 6 26Z"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="26" r="5" />
      <path d="M10 18 7 13M16 14l-2-6M24 12l0-6M32 14l2-6M38 18l3-5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleDecor({ className = "w-10 h-10", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M24 6c1 7 3 9 10 10-7 1-9 3-10 10-1-7-3-9-10-10 7-1 9-3 10-10Z"
        strokeLinejoin="round"
      />
      <path
        d="M38 28c.6 4 1.8 5.2 5.8 5.8-4 .6-5.2 1.8-5.8 5.8-.6-4-1.8-5.2-5.8-5.8 4-.6 5.2-1.8 5.8-5.8Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
