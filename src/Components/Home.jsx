import React from "react";
import bgImage from "../images/heroimage.jpg"
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const heroImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgImage})`
  }
  return (
    <section id="home" style={heroImage} className="hero-image">
      <div className="text-white text-center relative">
        <h2 className="text-[#ff5080] font-semibold tracking-wider text-3xl mb-3">
          Jared Mejia<span className="text-white text-4xl">,</span>
        </h2>
        <div className="h-[10rem] flex items-center sm:block sm:h-fit">
          <TypeAnimation
            sequence={[
              "Web developer", // Types 'One'
              1000, // Waits 1s
              "React developer", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Web Full-stack student",
              3000,
              "Videogames enjoyer",
              4000,
              "", // Types 'Three' without deleting 'Two'
            ]}
            speed={20}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2.5rem",
              lineHeight: "2.5rem",
              fontWeight: "600",
              letterSpacing: "0.05em",
            }}
          />
        </div>
        <a className="btn-animation inline-block rounded-full text-xl border-2 mt-[3rem] border-white py-3 px-6 go-to-btn">
          Go to projects
        </a>
      </div>
      <div className="absolute bottom-8">
        <a href="#iconGoDown">
          <i id="iconGoDown" className="fa-solid fa-angles-down text-4xl text-white move-up-and-down "></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
