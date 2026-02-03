type EachProjectProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const EachProject = ({ image, title, description, link }: EachProjectProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group block w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-500 will-change-transform group-hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-col gap-2 p-5">
        <h4 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
          <span className="ml-auto inline-block -translate-x-2 text-pink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            ↗
          </span>
        </h4>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export default EachProject;
