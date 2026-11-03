import Footer from "./footer";

// Plain <a> on purpose: the homepage's <Hydrate when={visible()}> sections only render
// when the page is server-rendered, not after a client-side navigation
const NotFound = () => {
  return (
    <>
      <main className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 sm:px-6">
        <a href="/" className="text-xl font-bold tracking-wide text-pink">
          /JM/
        </a>
        <h1 className="mt-10 text-[clamp(3rem,10vw,7rem)] leading-none font-extrabold tracking-[-0.04em]">
          Page not found
        </h1>
        <p className="mt-6 max-w-[40ch] text-xl text-muted">
          This page doesn't exist. Everything on this site is on the homepage.
        </p>
        <a
          href="/"
          className="mt-10 self-start rounded-full bg-pink-deep px-6 py-3 font-semibold text-on-pink transition-colors hover:bg-ink hover:text-paper"
        >
          Go to the homepage
        </a>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
