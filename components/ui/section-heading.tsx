type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
