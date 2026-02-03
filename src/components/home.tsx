import { ArrowDown } from "lucide-react";
import bgImage from "../images/heroimage.jpg";
import { TypingAnimation } from "./type-animation";

const Home = () => {
  const heroImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
  };
  return (
    <section
      id="home"
      style={heroImage}
      className="relative bg-center bg-no-repeat bg-cover bg-fixed h-svh flex flex-col justify-center items-center"
    >
      <div className="text-white text-center relative">
        <h2 className="text-pink font-semibold tracking-wider text-3xl mb-3">
          Jared Mejía
        </h2>
        <div className="h-fit flex items-center sm:block">
          <TypingAnimation
            text={["Software Engineer", "Full-stack Developer", "React Expert"]}
          />
        </div>
        <p className="mt-6 text-lg px-2 text-gray-300 max-w-lg mx-auto leading-relaxed">
          Over 2 years of experience delivering impactful web solutions and
          workflow automation for banking, healthcare, and education sectors.
        </p>
        <a
          href="#projects"
          className="btn-animation inline-block rounded-full text-xl border-2 mt-8 border-white py-3 px-6 go-to-btn"
        >
          Go to projects
        </a>
      </div>
      <div className="absolute bottom-8">
        <a href="#iconGoDown">
          <ArrowDown
            id="iconGoDown"
            className="size-9 text-white move-up-and-down"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
