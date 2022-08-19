import React, { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);


  const toogleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <section className="fixed w-[100%] navbar-background z-50">
      <div className="flex px-5 py-3 items-center justify-between border-b-2 border-black md:justify-between">
        <a
        href="#home"
          className="text-2xl font-semibold tracking-widest"
          style={{ color: "#ff5080" }}
        >
          /JM/
        </a>
        <div className="md:hidden">
          <i
            onClick={toogleNavBar}
            className="fa-solid fa-bars text-xl text-white"
          ></i>
        </div>
        <nav
          className={`${
            isNavVisible ? "show-nav" : "hide-nav"
          } absolute top-[3.5rem] left-0 navbar-background w-full md:max-h-fit md:static md:bg-inherit md:w-fit`}
        >
          <ul className="text-lg flex flex-col text-white items-center gap-1 py-3 md:flex-row md:gap-8 md:pr-5">
            <li>
              <a href="#home" className="links-animation cursor-pointer">Home</a>
            </li>
            <li>
              <a href="#iconGoDown" className="links-animation cursor-pointer">About me</a>
            </li>
            <li>
              <a href="#downloadCV" className="links-animation cursor-pointer">Skills</a>
            </li>
            <li>
              <a href="#projects" className="links-animation cursor-pointer">Projects</a>
            </li>
            <li>
              <a href="#contactMe" className="links-animation cursor-pointer">Contact me</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
