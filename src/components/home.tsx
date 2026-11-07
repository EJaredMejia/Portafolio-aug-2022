import CV from "../images/jared-mejia-cv.pdf";

const dateStartedWorking = new Date(2023, 3);

const Home = () => {
  const years = new Date().getFullYear() - dateStartedWorking.getFullYear();

  return (
    // Anchor in normal flow, like Section: #home on the pinned sheet itself lands mid-page
    <>
    <div id="home" aria-hidden="true" />
    <section aria-label="Introduction" className="sheet">
      <div className="hero-rise mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-4 pt-28 pb-16 sm:px-6 md:pb-24">
        <h1 className="text-[clamp(4rem,18vw,10.5rem)] leading-[0.9] font-extrabold tracking-[-0.045em]">
          Jared
          <br />
          Mejía<span className="text-pink">/</span>
        </h1>
        <p className="mt-8 max-w-[34ch] text-2xl leading-snug font-medium text-ink sm:text-3xl">
          Full-stack engineer. {years} years building web apps in TypeScript,
          React and Node.js, most recently for a Y&nbsp;Combinator-backed
          robotics startup.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={CV}
            type="application/pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-pink-deep px-6 py-3 font-semibold text-on-pink transition-colors hover:bg-ink hover:text-paper"
          >
            Download CV
          </a>
          <a
            href="#contactMe"
            className="font-semibold underline decoration-pink decoration-2 underline-offset-6 hover:text-pink-deep"
          >
            Get in touch
          </a>
        </div>
        <p className="mt-12 text-muted">
          Based in Honduras, on Central Time. Open to remote roles with US
          teams.
        </p>
      </div>
    </section>
    </>
  );
};

export default Home;
