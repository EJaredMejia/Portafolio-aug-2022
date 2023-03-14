import React from "react";

const EachProject = ({ image, title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="border-2 border-black relative overflow-hidden"
    >
      <img
        className="h-full relative z-0 object-fill lg:bg-black lg:grayscale lg:transition lg:ease-in lg:duration-200 appear-info lg:hover:grayscale-0"
        src={image}
        alt={title}
      />
      <div className="absolute hidden z-4 bg-[rgba(0,0,0,0.9)] p-2 text-lg inset-x-0 bottom-0 text-[#ff5080] sm:block">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-lg font-semibold">{description}</p>
      </div>
    </a>
  );
};

export default EachProject;
