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
      <div className="grid gap-12 grid-cols-1 justify-items-center w-[70%] mx-auto mt-8 sm:grid-cols-2 md:grid-cols-3 md:max-w-275">
        <Skill src={js} alt="javascript">
          Javascript
        </Skill>

        <Skill src={html} alt="HTML">
          HTML
        </Skill>

        <Skill src={css} alt="CSS">
          CSS
        </Skill>

        <Skill src={reactImage} alt="React">
          React
        </Skill>

        <Skill src={redux} alt="React redux">
          React redux
        </Skill>

        <Skill src={reactRouter} alt="React router">
          React router
        </Skill>

        <Skill src={githubImage} alt="Github">
          Github
        </Skill>

        <Skill src={bootstrap} alt="Bootstrap">
          Bootstrap
        </Skill>

        <Skill src={tailwindImage} alt="Tailwind">
          Tailwind
        </Skill>

        <Skill src={nodejs} alt="Node JS">
          Node JS
        </Skill>

        <Skill src={sequelize} alt="Sequelize">
          Sequelize
        </Skill>

        <Skill src={express} alt="Express">
          Express JS
        </Skill>

        <Skill src={typescript} alt="Typescript">
          Typescript
        </Skill>

        <Skill src={prisma} alt="Prisma">
          Prisma ORM
        </Skill>

        <Skill src={python} alt="Python">
          Python
        </Skill>

        <Skill src={django} alt="Django">
          Django
        </Skill>

        <Skill src={nestJs} alt="NestJs">
          NestJs
        </Skill>
      </div>
      <p
        id="projects"
        className="w-[70%] mx-auto mt-14 text-xl sm:grid-cols-2 md:grid-cols-3 md:max-w-275"
      >
        Are you interested?{" "}
        <a href="#contactMe" className="font-semibold text-pink">
          Contact Me
        </a>
      </p>
    </section>
  );
};

interface SkillProps {
  children: React.ReactNode;
  src: string;
  alt: string;
}
function Skill({ children, ...rest }: SkillProps) {
  return (
    <div>
      <img
        loading="lazy"
        decoding="async"
        className="max-h-32 object-contain max-w-48"
        {...rest}
      />
      <h4 className="text-center text-lg font-semibold">{children}</h4>
    </div>
  );
}
export default Skills;
