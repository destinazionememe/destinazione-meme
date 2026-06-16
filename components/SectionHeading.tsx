type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? (
        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.045em] text-current sm:text-7xl lg:text-8xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-current opacity-70">
          {text}
        </p>
      ) : null}
    </div>
  );
}
