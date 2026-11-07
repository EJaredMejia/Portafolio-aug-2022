import { Github } from "@/icons/github";
import { Linkedin } from "@/icons/linkein";

const Footer = () => {
  return (
    <footer className="tone-ink bg-paper">
      {/* Continues the Contact sheet, so it shares its color and drops the divider */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-muted sm:px-6">
        <p>Jared Mejía, {new Date().getFullYear()}</p>
        <div className="flex gap-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/EJaredMejia"
            aria-label="GitHub"
            className="hover:text-ink"
          >
            <Github fill="currentColor" className="size-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jared-mejia-41b58a23a/"
            aria-label="LinkedIn"
            className="hover:text-ink"
          >
            <Linkedin className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
