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
            SOFTWARE ENGINEER
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I am a versatile Software Engineer with a proven track record of
            delivering impactful web applications across banking, healthcare,
            and education. Currently, I am driving innovation at Edutechloft,
            where I architect Azure Functions for workflow automation and
            engineer complex data reporting systems with SSRS.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My experience includes scaling frontend architectures at Ficohsa
            using Micro-frontends (Module Federation) and developing secure
            cloud solutions at Ingenieria Digital. I specialize in bridging the
            gap between robust backend logic and intuitive, high-performance
            user interfaces.
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
