type LogoProps = {
  footer?: boolean;
  animated?: boolean;
  className?: string;
};

export default function Logo({ footer = false, animated = false, className = "" }: LogoProps) {
  const titleColor = footer ? "text-bg" : "text-brown";
  const accentColor = footer ? "bg-gold-dark" : "bg-brown";
  const subtitleColor = footer ? "text-gold-dark" : "text-brown";
  const lineAnim = animated ? "logo-line-open" : "";

  return (
    <div
      className={`flex flex-col items-center text-center select-none ${
        animated ? "logo-fade-slide" : ""
      } ${className}`}
    >
      <span
        className={`font-serif font-normal ${footer ? "text-[44px]" : "text-[38px]"} ${titleColor} leading-none`}
      >
        Ana Prado
      </span>
      <span className="mt-2 flex items-center gap-3">
        <span
          className={`h-px w-[34px] ${accentColor} ${lineAnim}`}
          style={animated ? { transformOrigin: "right center" } : undefined}
        />
        <span className={`text-[9px] font-sans uppercase tracking-[0.42em] ${subtitleColor}`}>
          Make Up
        </span>
        <span
          className={`h-px w-[34px] ${accentColor} ${lineAnim}`}
          style={animated ? { transformOrigin: "left center" } : undefined}
        />
      </span>
    </div>
  );
}
