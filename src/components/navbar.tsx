import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#aboutMe", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contactMe", label: "Contact" },
];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const closeNavBar = () => {
    setIsNavVisible(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-pink"
          onClick={closeNavBar}
          aria-label="Jared Mejía, back to top"
        >
          /JM/
        </a>
        <button
          type="button"
          className="md:hidden"
          aria-label={isNavVisible ? "Close menu" : "Open menu"}
          aria-expanded={isNavVisible}
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          {isNavVisible ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        <nav
          className={`${
            isNavVisible ? "max-h-80 border-b" : "max-h-0"
          } absolute inset-x-0 top-full overflow-hidden bg-paper transition-[max-height] duration-300 md:static md:max-h-none md:border-none md:bg-transparent`}
        >
          <ul className="flex flex-col gap-1 px-4 py-3 md:flex-row md:gap-8 md:p-0">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeNavBar}
                  className="block py-2 text-muted transition-colors hover:text-ink md:py-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
