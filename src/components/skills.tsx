import bootstrap from "../images/bootsrap.png";
import css from "../images/css.png";
import django from "../images/Django.png";
import express from "../images/express.png";
import githubImage from "../images/github.png";
import html from "../images/html.png";
import js from "../images/js.png";
import nestJs from "../images/nestjs.png";
import nodejs from "../images/node js.png";
import prisma from "../images/prisma.png";
import python from "../images/python.png";
import reactRouter from "../images/react router.png";
import reactImage from "../images/react.png";
import redux from "../images/redux.png";
import sequelize from "../images/sequelize.png";
import tailwindImage from "../images/taliwind.png";
import typescript from "../images/Typescript.png";

const Skills = () => {
  return (
    <section className="bg-gray-100 py-6" id="skills">
      <h3 className="text-2xl border-b-4 w-fit mx-auto font-semibold border-gray-400">
        My skills
      </h3>
      <div className="grid gap-12 grid-cols-1 justify-items-center w-[70%] mx-auto mt-8 sm:grid-cols-2 md:grid-cols-3 md:max-w-[1100px]">
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={js}
            alt="javascript"
          />
          <h4 className="text-center text-lg font-semibold">Javascript</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={html}
            alt="HTML"
          />
          <h4 className="text-center text-lg font-semibold">HTML</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={css}
            alt="CSS"
          />
          <h4 className="text-center text-lg font-semibold">CSS</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={reactImage}
            alt="React"
          />
          <h4 className="text-center text-lg font-semibold">React</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={redux}
            alt="React redux"
          />
          <h4 className="text-center text-lg font-semibold">React redux</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={reactRouter}
            alt="React router"
          />
          <h4 className="text-center text-lg font-semibold">React router</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={githubImage}
            alt="Github"
          />
          <h4 className="text-center text-lg font-semibold">Github</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={bootstrap}
            alt="Bootstrap"
          />
          <h4 className="text-center text-lg font-semibold">Bootstrap</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={tailwindImage}
            alt="Tailwind"
          />
          <h4 className="text-center text-lg font-semibold">Tailwind</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={nodejs}
            alt="Node JS"
          />
          <h4 className="text-center text-lg font-semibold">Node JS</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={sequelize}
            alt="Sequelize"
          />
          <h4 className="text-center text-lg font-semibold">Sequelize</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={express}
            alt="Express"
          />
          <h4 className="text-center text-lg font-semibold">Express JS</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={typescript}
            alt="Typescript"
          />
          <h4 className="text-center text-lg font-semibold">Typescript</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={prisma}
            alt="Prisma"
          />
          <h4 className="text-center text-lg font-semibold">Prisma ORM</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={python}
            alt="Python"
          />
          <h4 className="text-center text-lg font-semibold">Python</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={django}
            alt="Django"
          />
          <h4 className="text-center text-lg font-semibold">Django</h4>
        </div>
        <div>
          <img
            className="max-h-[8rem] object-contain max-w-[12rem]"
            src={nestJs}
            alt="NestJs"
          />
          <h4 className="text-center text-lg font-semibold">NestJs</h4>
        </div>
      </div>
      <p
        id="projects"
        className="w-[70%] mx-auto mt-14 text-xl sm:grid-cols-2 md:grid-cols-3 md:max-w-[1100px]"
      >
        Are you interested?{" "}
        <a href="#contactMe" className="font-semibold text-[#ff5080]">
          Contact Me
        </a>
      </p>
    </section>
  );
};

export default Skills;
