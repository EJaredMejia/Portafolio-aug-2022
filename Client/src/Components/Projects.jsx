import React from "react";
import ecommerce from "../images/proyecto e-commerce.png";
import pokedex from "../images/proyecto pokedex.png";
import crud from "../images/project CRUD.png";
import rickAndMorty from "../images/proyecto rick and morty.png";
import realtimechat from "../images/project realtimechat.png";

const Projects = () => {
  return (
    <section className="mt-5 pb-[8rem]">
      <h3 className="text-2xl border-b-4 w-fit mx-auto font-semibold border-gray-400">
        My projects
      </h3>
      <div className="flex flex-wrap mt-8 w-[90%] max-w-[1300px] mx-auto justify-center gap-5 md:grid md:grid-cols-2 md:gap-8">
        <div className="border-2 border-black overflow-hidden ">
          <a
            className="appear-info"
            href="https://api-e-commerce.netlify.app/"
            target="_blank"
          >
            <img
              className="mb-[-4.1rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain "
              src={ecommerce}
              alt="ecommerce"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">E-commerce</h4>
            <p className="text-lg md:text-sm xl:text-lg font-semibold">
              React-router, react-redux,{" "}
              <span className="hidden xl:inline">tailwind,</span> express.js and
              sequelize
            </p>
          </div>
        </div>
        <div className="border-2 border-black overflow-hidden ">
          <a
            className="appear-info"
            href="https://p0k3w1k1.netlify.app/#/pokedex"
            target="_blank"
          >
            <img
              className="mb-[-4rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain"
              src={pokedex}
              alt="pokedex"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">Pokedex</h4>
            <p className="text-lg md:text-sm xl:text-lg font-semibold">
              React router, react-redux and axios
            </p>
          </div>
        </div>
        <div className="border-2 border-black overflow-hidden ">
          <a
            className="appear-info"
            href="https://crudwithapi.netlify.app/"
            target="_blank"
          >
            <img
              className="mb-[-4rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain"
              src={crud}
              alt="CRUD"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">CRUD</h4>
            <p className="text-lg md:text-sm xl:text-lg font-semibold">
              react-hook-form, express.js and sequelize
            </p>
          </div>
        </div>
        <div className="border-2 border-black overflow-hidden ">
          <a
            className="appear-info"
            href="http://ec2-13-59-20-55.us-east-2.compute.amazonaws.com/"
            target="_blank"
          >
            <img
              className="mb-[-4.5rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain"
              src={realtimechat}
              alt="Realtime chat"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">Realtime chat</h4>
            <p className="text-lg md:text-sm xl:text-lg font-semibold">
              NestJs, <span className="hidden xl:inline">tailwind, </span>
              Socket.io, JWT, React, EC2 and RDS AWS
            </p>
          </div>
        </div>
        <div className="border-2 border-black overflow-hidden ">
          <a
            className="appear-info"
            href="https://rickandmortylocations.netlify.app/"
            target="_blank"
          >
            <img
              className="mb-[-4.1rem] md:w-auto relative grayscale hover:grayscale-0 cursor-pointer grayscale-animation object-contain"
              src={rickAndMorty}
              alt="Rick and Morty Wiki"
            />
          </a>
          <div className="relative h-[4rem] px-3 bg-[rgba(0,0,0,0.8)] text-[#ff5080] projects-animation">
            <h4 className="font-bold text-xl pt-1">Rick and morty wiki</h4>
            <p className="text-lg md:text-sm xl:text-lg font-semibold">
              Frontend with react, axios and css.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
