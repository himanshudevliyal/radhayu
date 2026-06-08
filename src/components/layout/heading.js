export function SectionHeading({
  badge,
  title, // ReactNode (JSX) now, not string
  highlight,
  des,
  highlightAlign = "inline", // "inline" or "center"
  className = "",
  titleClassName = "",
}) {
  return (
    <div className={`text-center ${className}`}>
      {badge && (
        <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
          ✦ {badge}
        </span>
      )}

      <h2
        className={`font-bold leading-tight text-[#1F1F1F] ${titleClassName} ${
          highlightAlign === "center" ? "text-center" : ""
        }`}
      >
        {title}{" "}
        {highlight && (
          <span
            className={`italic font-serif text-accent ${
              highlightAlign === "center" ? "block mt-2" : ""
            }`}
          >
            {highlight}
          </span>
        )}
      </h2>

      <p className="my-6 text-base leading-relaxed text-muted-foreground">
        {des}
      </p>
    </div>
  );
}
