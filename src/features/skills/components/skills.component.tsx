import bootstrap from "@/images/bootsrap.png";
import css from "@/images/css.png";
import django from "@/images/Django.png";
import express from "@/images/express.png";
import githubImage from "@/images/github.png";
import html from "@/images/html.png";
import js from "@/images/js.png";
import nestJs from "@/images/nestjs.png";
import nodejs from "@/images/node js.png";
import prisma from "@/images/prisma.png";
import python from "@/images/python.png";
import reactRouter from "@/images/react router.png";
import reactImage from "@/images/react.png";
import redux from "@/images/redux.png";
import sequelize from "@/images/sequelize.png";
import tailwindImage from "@/images/taliwind.png";
import typescript from "@/images/Typescript.png";
import { Skill } from "../types/skills.types";

export function Skills() {
  const skills: Skill[] = [
    { name: "JavaScript", icon: js },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "React", icon: reactImage },
    { name: "Redux", icon: redux },
    { name: "React Router", icon: reactRouter },
    { name: "GitHub", icon: githubImage },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Tailwind CSS", icon: tailwindImage },
    { name: "Node.js", icon: nodejs },
    { name: "Sequelize", icon: sequelize },
    { name: "Express.js", icon: express },
    { name: "TypeScript", icon: typescript },
    { name: "Prisma", icon: prisma },
    { name: "Python", icon: python },
    { name: "Django", icon: django },
    { name: "NestJS", icon: nestJs },
  ];

  function SkillCard({
    skill,
    className,
  }: {
    skill: Skill;
    className?: string;
  }) {
    return (
      <div
        className={`group flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl dark:bg-gray-700 ${className}`}
      >
        <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="text-center text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white">
          {skill.name}
        </h3>
      </div>
    );
  }

  return (
    <section className="bg-white pt-8 pb-24 dark:bg-gray-950" id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            A comprehensive toolkit of languages, frameworks, and technologies I
            use to build scalable digital solutions.
          </p>
        </div>

        {/* Mobile: Marquee */}
        <div className="block md:hidden overflow-hidden py-4 pause-on-hover">
          <div className="animate-marquee flex gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                skill={skill}
                className="w-32 shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden flex-wrap gap-4 justify-center md:flex!">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              className="basis-1/4 md:basis-1/6 lg:basis-1/7"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Are you interested in collaborating?{" "}
            <a
              href="#contactMe"
              className="font-semibold text-pink transition-colors hover:opacity-80"
            >
              Contact Me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
