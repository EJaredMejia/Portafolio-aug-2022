import clipit from "../images/clipit.svg";
import drizzleToDbml from "../images/drizzle-to-dbml.png";
import RedMedicatel from "../images/red-medicatel.png";
import EachProject from "./each-project";
import Section from "./section";

const Projects = () => {
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

  const [featured, ...rest] = projects;

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
        <EachProject featured className="sm:col-span-2" {...featured} />
        {rest.map((project) => (
          <EachProject key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
