import crud from "../images/project CRUD.png";
import ecommerce from "../images/proyecto e-commerce.png";
import pokedex from "../images/proyecto pokedex.png";
import RedMedicatel from "../images/red-medicatel.png";
import rickAndMorty from "../images/Rick and morty.png";
import drizzleToDbml from "../images/drizzle-to-dbml.png";
import EachProject from "./each-project";

const Projects = () => {
  const projects = [
    {
      link: "https://api-e-commerce.netlify.app/",
      image: ecommerce,
      title: "Fintech E-commerce Ecosystem",
      description:
        "Architected a scalable e-commerce solution for the financial sector, implementing robust state management and secure transaction workflows with Sequelize/PostgreSQL.",
    },
    {
      link: "https://p0k3w1k1.netlify.app/#/pokedex",
      image: pokedex,
      title: "Interactive Data Visualization",
      description:
        "Engineered a high-performance data exploration interface utilizing Redux for complex state synchronization and RESTful API optimizations.",
    },
    {
      link: "https://redmedicatel.com/",
      image: RedMedicatel,
      title: "Healthcare Provider Platform",
      description:
        "Delivered a pixel-perfect, accessible digital presence for a healthcare organization, optimized for SEO and cross-device performance using Next.js.",
    },
    {
      link: "https://drizzle-to-dbml.netlify.app/",
      image: drizzleToDbml,
      title: "Developer Workflow Utility",
      description:
        "Developed an open-source tool to accelerate database design processes by automating the conversion of Drizzle ORM schemas into DBML visualizations.",
    },
    {
      link: "https://crudwithapi.netlify.app/",
      image: crud,
      title: "Enterprise Management System",
      description:
        "Implemented a comprehensive administrative dashboard featuring granular access controls, transactional integrity, and dynamic data validation.",
    },
    {
      link: "https://rickandmortylocations.netlify.app/",
      image: rickAndMorty,
      title: "Discovery Hub Prototype",
      description:
        "Designed and built a character-driven web experience focusing on modern UI design patterns and efficient multi-route navigation structure.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            A diverse collection of web applications showcasing my expertise in
            full-stack development and modern UI design.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, index) => (
            <EachProject key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
