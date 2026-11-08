import { yearsOfExperience } from "@/utils/experience";
import Section from "./section";

const AboutMe = () => {
  return (
    <Section id="aboutMe" title="About" tone="white">
      <div className="max-w-[62ch] space-y-5 text-lg leading-8 text-muted">
        <p className="text-xl leading-8 text-ink">
          Full-stack developer with {yearsOfExperience()}+ years building web applications in
          TypeScript, React, and Node.js on AWS and Azure, across robotics,
          banking, healthcare, and education.
        </p>
        <p>
          Most recently I worked on contract for Avea Robotics, a Y
          Combinator-backed teleoperation startup, where I built cross-device
          authentication for Meta Quest VR headsets, a CI/CD pipeline with
          GitHub Actions and AWS CDK, and a real-time telemetry dashboard on
          ClickHouse.
        </p>
        <p>
          I test with Vitest and Storybook and work daily with Claude Code and
          Greptile. Based in Honduras (Central Time), fluent in English, and
          open to remote roles with US teams.
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;
