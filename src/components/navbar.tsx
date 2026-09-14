import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toogleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNavBar = () => {
    setIsNavVisible(false);
  };

  return (
    <section className="fixed w-full bg-black/90 backdrop-blur-md z-50">
      <div className="flex px-5 py-3 items-center justify-between border-b border-white/10 md:justify-between">
        <a
          href="#home"
          className="text-2xl font-semibold tracking-widest"
          style={{ color: "#ff5080" }}
          onClick={closeNavBar}
        >
          /JM/
        </a>
        <div className="md:hidden">
          <Menu onClick={toogleNavBar} className="size-6 text-white cursor-pointer" />
        </div>
        <nav
          className={`${
            isNavVisible ? "max-h-96 border-b border-white/10" : "max-h-0"
          } transition-[max-height] duration-300 ease-in-out overflow-hidden top-14 left-0 bg-black/95 backdrop-blur-xl w-full absolute md:bg-transparent md:border-none md:max-h-fit md:static md:w-fit`}
        >
          <ul className="text-lg flex flex-col text-white items-center gap-1 py-3 md:flex-row md:gap-8 md:pr-5">
            <li>
              <a href="#home" onClick={closeNavBar} className="links-animation cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutMe" onClick={closeNavBar} className="links-animation cursor-pointer">
                About me
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeNavBar} className="links-animation cursor-pointer">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeNavBar} className="links-animation cursor-pointer">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeNavBar} className="links-animation cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a href="#contactMe" onClick={closeNavBar} className="links-animation cursor-pointer">
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
