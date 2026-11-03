const Experience = () => {
  const experiences = [
    {
      company: "Robotic Crew",
      role: "Software Engineer · Contract",
      date: "March 2026 - September 2026",
      description:
        "Contract for Avea Robotics, a Y Combinator-backed robotics teleoperation startup. Built cross-device authentication with Better-Auth and ElysiaJS, including Meta Quest VR headset login. Set up continuous deployment for a microservices monorepo with GitHub Actions and AWS CDK, built a live ClickHouseDB telemetry dashboard for ~25 teleoperated robots, and moved the WebXR WebSocket cache to AWS Valkey (Redis) so connections survive server restarts.",
    },
    {
      company: "Edutechloft",
      role: "Software Engineer",
      date: "September 2025 - March 2026",
      description:
        "Built Azure Functions that automate student status tracking and document generation, replacing manual admin work. Developed dynamic web forms with automated PDF generation, and built SQL Server Reporting Services (SSRS) reports for Sonoran Desert Institute, a US college.",
    },
    {
      company: "Ficohsa",
      role: "Frontend Developer",
      date: "July 2024 - September 2025",
      description:
        "Built the bank's online insurance purchase application, with payments taken directly from customers' bank accounts. Built micro-frontends with React, Module Federation, and Next.js so features ship as independent apps, and maintained the bank's Material UI component library.",
    },
    {
      company: "Ingenieria Digital",
      role: "Full-stack Developer",
      date: "April 2023 - September 2025",
      description:
        "Integrated insurance provider systems to automate real-time benefit verification for patients. Contributed to a digital medical records system with secure file storage on AWS S3, built an online appointment scheduling and payment system, and created an internal Shadcn component library.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            My professional journey in software engineering.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-[33%] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-6"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.company}
                </h3>
                <p className="text-pink font-medium mt-1">{exp.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {exp.date}
                </p>
              </div>
              <div className="md:w-2/3">
                <div className="hidden md:block absolute left-[33%] top-2 w-3 h-3 rounded-full bg-pink translate-x-[-1.65rem]"></div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
