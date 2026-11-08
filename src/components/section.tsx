import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  title: ReactNode;
  // Each tone re-scopes the palette (see index.css), so sheets read as distinct pages
  tone: "white" | "mist" | "ink";
  children: ReactNode;
};

// A full-width sheet that stacks over the previous one as you scroll
const Section = ({ id, title, tone, children }: SectionProps) => {
  return (
    <>
      {/* Anchor target in normal flow: a link to a pinned sheet would land wherever it happens to be stuck */}
      <div id={id} aria-hidden="true" />
      <section aria-labelledby={`${id}-title`} className={`sheet sheet-raised tone-${tone}`}>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <h2
            id={`${id}-title`}
            className="text-5xl font-extrabold tracking-[-0.035em] sm:text-6xl md:text-7xl"
          >
            {title}
          </h2>
          <div className="mt-12 md:mt-16">{children}</div>
        </div>
      </section>
    </>
  );
};

export default Section;
