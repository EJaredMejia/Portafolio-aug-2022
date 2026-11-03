import Section from "./section";

const Experience = () => {
  const experiences = [
    {
      company: "Robotic Crew",
      role: "Software Engineer, contract",
      date: "Mar 2026 – Sep 2026",
      description:
        "Contract for Avea Robotics, a Y Combinator-backed robotics teleoperation startup. Built cross-device authentication with Better-Auth and ElysiaJS, including Meta Quest VR headset login. Set up continuous deployment for a microservices monorepo with GitHub Actions and AWS CDK, built a live ClickHouseDB telemetry dashboard for ~25 teleoperated robots, and moved the WebXR WebSocket cache to AWS Valkey (Redis) so connections survive server restarts.",
    },
    {
      company: "Edutechloft",
      role: "Software Engineer",
      date: "Sep 2025 – Mar 2026",
      description:
        "Built Azure Functions that automate student status tracking and document generation, replacing manual admin work. Developed dynamic web forms with automated PDF generation, and built SQL Server Reporting Services (SSRS) reports for Sonoran Desert Institute, a US college.",
    },
    {
      company: "Ficohsa",
      role: "Frontend Developer",
      date: "Jul 2024 – Sep 2025",
      description:
        "Built the bank's online insurance purchase application, with payments taken directly from customers' bank accounts. Built micro-frontends with React, Module Federation, and Next.js so features ship as independent apps, and maintained the bank's Material UI component library.",
    },
    {
      company: "Ingenieria Digital",
      role: "Full-stack Developer",
      date: "Apr 2023 – Sep 2025",
      description:
        "Integrated insurance provider systems to automate real-time benefit verification for patients. Contributed to a digital medical records system with secure file storage on AWS S3, built an online appointment scheduling and payment system, and created an internal Shadcn component library.",
    },
  ];

  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l-2 border-line">
        {experiences.map((exp) => (
          <li key={exp.company} className="relative pb-14 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[7px] size-3 rounded-full bg-pink ring-4 ring-paper"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-2xl font-bold tracking-tight">
                {exp.company}
              </h3>
              <p className="text-muted tabular-nums">{exp.date}</p>
            </div>
            <p className="mt-1 font-medium text-pink-deep">{exp.role}</p>
            <p className="mt-4 max-w-[68ch] leading-7 text-muted">
              {exp.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
