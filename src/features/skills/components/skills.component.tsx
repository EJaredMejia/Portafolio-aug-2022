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
        "Module Federation",
        "Tailwind CSS",
        "Material UI",
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
      ],
    },
    {
      name: "Cloud and data",
      skills: [
        "AWS CDK",
        "AWS S3",
        "AWS Valkey",
        "Azure Functions",
        "ClickHouse",
        "PostgreSQL",
        "SQL Server (SSRS)",
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
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <dt className="border-b border-line pb-3 font-semibold">
              {group.name}
            </dt>
            <dd className="mt-4">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-lg text-muted">
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
