type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-ember">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-8 text-ash">{text}</p> : null}
    </div>
  );
}
