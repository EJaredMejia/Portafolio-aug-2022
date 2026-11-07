import { type Ref } from "react";

type EachProjectProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  // The project currently matched by the pinned screenshot (desktop only)
  active: boolean;
  ref: Ref<HTMLElement>;
};

const EachProject = ({
  image,
  title,
  description,
  link,
  linkLabel,
  active,
  ref,
}: EachProjectProps) => {
  return (
    <article
      ref={ref}
      className={`py-10 first:pt-0 md:flex md:min-h-[70vh] md:flex-col md:justify-center md:py-0 md:transition-opacity md:duration-300 ${active ? "" : "md:opacity-40"}`}
    >
      {/* Phones have no pinned screenshot, so each project shows its own */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="mb-6 block overflow-hidden rounded-xl border-2 border-ink bg-ink md:hidden"
      >
        <img
          className="aspect-16/10 w-full object-cover object-top"
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </a>
      <h3 className="text-4xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 max-w-[46ch] text-lg leading-8 text-muted">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block w-fit font-semibold underline decoration-pink decoration-2 underline-offset-6 hover:decoration-4"
      >
        {linkLabel}
        <span className="sr-only"> ({title}, opens in a new tab)</span>
      </a>
    </article>
  );
};

export default EachProject;
