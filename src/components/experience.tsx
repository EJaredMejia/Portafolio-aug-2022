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
    <Section id="experience" title="Experience" tone="mist">
      <ol className="divide-y divide-line border-y border-line">
        {experiences.map((exp) => (
          <li
            key={exp.company}
            className="grid gap-x-12 gap-y-4 py-10 md:grid-cols-[17rem_1fr] md:py-14"
          >
            {/* Stays in view while the description scrolls past */}
            <div className="md:sticky md:top-24 md:self-start">
              <p className="text-muted tabular-nums">{exp.date}</p>
              <h3 className="mt-1 text-3xl font-bold tracking-tight">
                {exp.company}
              </h3>
              <p className="mt-1 font-semibold text-pink-deep">{exp.role}</p>
            </div>
            <p className="max-w-[62ch] text-lg leading-8 text-muted">
              {exp.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
