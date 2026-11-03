import CV from "../images/jared-mejia-cv.pdf";

const AboutMe = () => {
  return (
    <section className="bg-white py-24 dark:bg-gray-950" id="aboutMe">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <h3 className="mt-4 text-xl font-semibold tracking-wider text-pink">
            FULL-STACK ENGINEER
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Full-stack developer with 3+ years building web applications in
            TypeScript, React, and Node.js on AWS and Azure, across robotics,
            banking, healthcare, and education.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Most recently I worked on contract for Avea Robotics, a Y
            Combinator-backed teleoperation startup, where I built cross-device
            authentication for Meta Quest VR headsets, a CI/CD pipeline with
            GitHub Actions and AWS CDK, and a real-time telemetry dashboard on
            ClickHouse.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I test with Vitest and Storybook and work daily with Claude Code and
            Greptile. Based in Honduras (Central Time), fluent in English, and
            open to remote roles with US teams.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              type="application/pdf"
              id="downloadCV"
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-pink px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
