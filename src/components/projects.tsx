import clipit from "../images/clipit.svg";
import drizzleToDbml from "../images/drizzle-to-dbml.png";
import RedMedicatel from "../images/red-medicatel.png";
import { useEffect, useRef, useState } from "react";
import EachProject from "./each-project";
import Section from "./section";

const Projects = () => {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLElement | null)[]>([]);

  // The project crossing the middle of the screen drives the pinned screenshot
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(items.current.indexOf(entry.target as HTMLElement));
        }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      link: "https://github.com/EJaredMejia/clipit",
      linkLabel: "View on GitHub",
      image: clipit,
      title: "Clipit",
      description:
        "Open-source tool that turns long Twitch and Kick streams into TikTok and YouTube Shorts clips, with AI picking moments that fit current trends. Includes a dashboard to publish clips with one click and CI with automated AI code review.",
    },
    {
      link: "https://redmedicatel.com/",
      linkLabel: "Visit site",
      image: RedMedicatel,
      title: "Red Medicatel",
      description:
        "Website for a healthcare provider, built with Next.js. Accessible, SEO-friendly and fast on every device.",
    },
    {
      link: "https://drizzle-to-dbml.netlify.app/",
      linkLabel: "Try it",
      image: drizzleToDbml,
      title: "Drizzle to DBML",
      description:
        "Open-source tool that converts Drizzle ORM schemas into DBML, so you can see your database as a diagram.",
    },
  ];

  return (
    <Section id="projects" title="Projects" tone="ink">
      <div className="md:grid md:grid-cols-[6fr_5fr] md:gap-14">
        <div
          aria-hidden="true"
          className="sticky top-[18vh] hidden self-start overflow-hidden rounded-2xl border border-line bg-field md:grid"
        >
          {projects.map((project, i) => (
            <img
              key={project.title}
              className={`col-start-1 row-start-1 aspect-16/10 w-full object-cover object-top transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
              src={project.image}
              alt=""
              decoding="async"
            />
          ))}
        </div>
        <div>
          {projects.map((project, i) => (
            <EachProject
              key={project.title}
              ref={(item) => {
                items.current[i] = item;
              }}
              active={i === active}
              {...project}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
