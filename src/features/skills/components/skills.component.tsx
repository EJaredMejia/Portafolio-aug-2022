import Section from "@/components/section";
import { SkillGroup } from "../types/skills.types";

export function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      name: "Frontend",
      skills: [
        "TypeScript",
        "React",
        "Next.js",
        "TanStack Start",
        "Module Federation",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
        "Shadcn",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "ElysiaJS",
        "Better-Auth",
        "NestJS",
        "Express",
        "Prisma",
        "Drizzle",
        "Python",
        "FastAPI",
        "Django",
        "PHP",
      ],
    },
    {
      name: "Cloud",
      skills: ["AWS CDK", "AWS S3", "AWS Valkey", "Azure", "Azure Functions"],
    },
    {
      name: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Microsoft SQL Server",
        "SSRS",
        "ClickHouse",
      ],
    },
    {
      name: "Testing and tools",
      skills: [
        "Vitest",
        "Storybook",
        "GitHub Actions",
        "Claude Code",
        "Greptile",
      ],
    },
  ];

  return (
    <Section id="skills" title="Skills" tone="white">
      <dl className="divide-y divide-line border-y border-line">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <dt className="font-semibold">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 text-lg text-muted">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
