import React from "react";

const AboutMe = () => {
  return (
    <section className="w-[80%] mx-auto max-w-[800px]">
      <h3
        id="aboutMe"
        className="font-semibold mt-6 text-2xl border-b-4 w-fit border-gray-400"
      >
        About Me
      </h3>
      <h4 className="text-xl my-5 tracking-widest font-semibold">
        WEB DEVELOPER
      </h4>
      <p className="text-lg text-gray-700">
        I am a full-stack developer who loves to learn more about programming
        every day, I have knowledge in; CSS, HTML, JavaScript, React and in
        back-end I have knowledge in node js with express and connect databases
        with the sequelize ORM. Currently studying at Academlo and in my spare
        times I play videogames.
      </p>
      <a
        id="downloadCV"
        href="/src/images/CV.pdf"
        download
        className="mb-6 btn-animation inline-block rounded-full text-lg border-2 border-black mt-[1.5rem] py-2 px-5 go-to-btn hover:text-white"
      >
        Download CV
      </a>
    </section>
  );
};

export default AboutMe;
