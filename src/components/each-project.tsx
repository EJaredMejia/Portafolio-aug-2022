type EachProjectProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  featured?: boolean;
  className?: string;
};

const EachProject = ({
  image,
  title,
  description,
  link,
  linkLabel,
  featured = false,
  className = "",
}: EachProjectProps) => {
  return (
    <article
      className={`${featured ? "grid items-center gap-8 lg:grid-cols-[3fr_2fr]" : ""} ${className}`}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden rounded-lg border border-line bg-field"
      >
        <img
          className="aspect-2/1 w-full object-cover object-top"
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </a>
      <div className={featured ? "" : "mt-6"}>
        <h3
          className={`font-bold tracking-tight ${featured ? "text-4xl" : "text-2xl"}`}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-[60ch] leading-7 text-muted">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block font-semibold underline decoration-pink decoration-2 underline-offset-6 hover:text-pink-deep"
        >
          {linkLabel}
          <span className="sr-only"> ({title}, opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
};

export default EachProject;
