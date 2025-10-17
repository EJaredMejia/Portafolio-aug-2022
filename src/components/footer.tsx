import { Github } from "@/icons/github";
import { Linkedin } from "@/icons/linkein";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-8 pt-8 pb-12">
      <h4 className="text-center text-lg mb-5">
        Jared Mejia {new Date().getFullYear()}
      </h4>
      <div className="flex justify-center gap-7">
        <a
          target="_blank"
          href="https://github.com/EJaredMejia"
          className=" cursor-pointer grid place-items-center rounded-full"
        >
          <Github fill="white" className="size-7" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/jared-mejia-41b58a23a/"
          className="cursor-pointer grid place-items-center rounded-full"
        >
          <Linkedin className="text-white size-7" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
