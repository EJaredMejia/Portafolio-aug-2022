import React from "react";
import crud from "../images/project CRUD.png";
import ecommerce from "../images/proyecto e-commerce.png";
import pokedex from "../images/proyecto pokedex.png";
import rickAndMorty from "../images/Rick and morty.png";
import EachProject from "./EachProject";
import RedMedicatel from './../images/red-medicatel.png'

const Projects = () => {
  return (
    <section className="py-6">
      <h3 className="text-2xl border-b-4 w-fit mx-auto font-semibold border-gray-400">
        My projects
      </h3>
      <div className="w-11/12 mt-8 m-auto grid gap-4 grid-cols-1 lg:grid-cols-2 justify-items-center">
        <EachProject
          link={"https://api-e-commerce.netlify.app/"}
          image={ecommerce}
          title={"E-commerce"}
          description={
            "React-router, react-redux, tailwind, express.js and sequelize"
          }
        />
        {/* TODO UPDATE WHEN DEPLOY WORKS */}
        {/* <EachProject
          link={"https://rdbdd6f34yep6zd2pxzpm2euru0rkbwi.lambda-url.us-east-2.on.aws/"}
          image={customSports}
          title={"Custom Sports"}
          description={"React, styled-components, Express, MongoDB, and EC2"}
        /> */}
        <EachProject
          link={"https://p0k3w1k1.netlify.app/#/pokedex"}
          image={pokedex}
          title={"Pokedex"}
          description={"React router, react-redux and axios"}
        />
        <EachProject
          link={"https://redmedicatel.com/"}
          image={RedMedicatel}
          title={"Red Medicatel"}
          description={"NextJs and Shadcn"}
        />
        <EachProject
          link={"https://crudwithapi.netlify.app/"}
          image={crud}
          title="CRUD"
          description={"react-hook-form, express.js and sequelize"}
        />
        <EachProject
          link={"https://rickandmortylocations.netlify.app/"}
          image={rickAndMorty}
          title="Rick and morty wiki"
          description={"Frontend with react, axios and css"}
        />
      </div>
    </section>
  );
};

export default Projects;
