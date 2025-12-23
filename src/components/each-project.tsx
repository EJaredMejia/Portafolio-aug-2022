type EachProjectProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};
const EachProject = ({ image, title, description, link }: EachProjectProps) => {
  return (
    <>
      <div className="text-pink text-center sm:hidden">
        <a href={link} target="_blank">
          <h4 className="font-bold text-xl text-center">{title}</h4>
        </a>
        <p className="text-lg font-semibold text-black">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        className="border-2 border-black relative overflow-hidden group"
      >
        <img
          className="h-full relative z-0 object-fill lg:bg-black lg:grayscale lg:transition lg:ease-in lg:duration-200 appear-info lg:group-hover:grayscale-0"
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute hidden z-4 bg-navbar p-2 text-lg inset-x-0 bottom-0 text-pink sm:block"
        >
          <h4 className="font-bold text-xl">{title}</h4>
          <p className="text-lg font-semibold">{description}</p>
        </div>
      </a>
    </>
  );
};

export default EachProject;
