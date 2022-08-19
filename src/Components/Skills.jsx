import React from "react";
import js from "../images/js.png";
import html from "../images/html.png"
import css from "../images/css.png"
import reactImage from "../images/react.png";
import redux from "../images/redux.png"
import reactRouter from "../images/react router.png"
import bootstrap from "../images/bootsrap.png"
import tailwindImage from "../images/taliwind.png"

const Skills = () => {
  return (
    <section className="bg-gray-100 py-6" id="skills">
      <h3 className="text-2xl border-b-4 w-fit mx-auto font-semibold border-gray-400">
        My skills
      </h3>
      <div className="grid gap-12 grid-cols-1 justify-items-center w-[70%] mx-auto mt-8 sm:grid-cols-2 md:grid-cols-3 md:max-w-[1100px]">
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={js} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">Javascript</h4>
        </div>
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={html} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">HTML</h4>
        </div>
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={css} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">CSS</h4>
        </div>
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={reactImage} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">React</h4>
        </div>
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={redux} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">React redux</h4>
        </div>
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={reactRouter} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">React router</h4>
        </div>
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={bootstrap} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">Bootstrap</h4>
        </div>
        <div>
          <img className="max-h-[8rem] object-contain max-w-[12rem]" src={tailwindImage} alt="javascript" />
          <h4 className="text-center text-lg font-semibold">Tailwind</h4>
        </div>
      </div>
      <p id="projects" className="w-[70%] mx-auto mt-14 text-xl sm:grid-cols-2 md:grid-cols-3 md:max-w-[1100px]">Are you interested? <a href="#contactMe" className="font-semibold text-[#ff5080]">Contact Me</a></p>
    </section>
  );
};

export default Skills;
