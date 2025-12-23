// import { TypeAnimation } from "react-type-animation";
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
          Jared Mejia<span className="text-white text-4xl">,</span>
        </h2>
        <div className="h-40 flex items-center sm:block sm:h-fit">
          <TypingAnimation
            text={[
              "Web developer",
              "React developer",
              "Full-stack developer",
              "Videogames enjoyer",
              "Back-end developer",
            ]}
          />
        </div>
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
