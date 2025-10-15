import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toogleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <section className="fixed w-full bg-navbar z-50">
      <div className="flex px-5 py-3 items-center justify-between border-b-2 border-black md:justify-between">
        <a
          href="#home"
          className="text-2xl font-semibold tracking-widest"
          style={{ color: "#ff5080" }}
        >
          /JM/
        </a>
        <div className="md:hidden">
          <Menu onClick={toogleNavBar} className="size-5 text-white" />
        </div>
        <nav
          className={`${
            isNavVisible ? "max-h-48" : "max-h-0"
          } transition-[max-height] duration-200 overflow-hidden top-[3.5rem] left-0 bg-navbar w-full absolute md:bg-inherit md:max-h-fit md:static md:w-fit`}
        >
          <ul className="text-lg flex flex-col text-white items-center gap-1 py-3 md:flex-row md:gap-8 md:pr-5">
            <li>
              <a href="#home" className="links-animation cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#iconGoDown" className="links-animation cursor-pointer">
                About me
              </a>
            </li>
            <li>
              <a href="#downloadCV" className="links-animation cursor-pointer">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="links-animation cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a href="#contactMe" className="links-animation cursor-pointer">
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
