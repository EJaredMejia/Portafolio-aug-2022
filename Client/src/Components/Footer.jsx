import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-8">
      <h4 className="text-center text-lg mb-5">Jared Mejia 2022</h4>
      <div className="flex justify-center gap-5">
        <a
          target="_blank"
          href="https://github.com/EJaredMejia"
        >
          <i className="fa-brands fa-2xl fa-github bg-gray-800 cursor-pointer px-3 py-7 rounded-full"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jared-mejia-41b58a23a/"
        >
          <i className="fa-brands fa-2xl fa-linkedin-in bg-gray-800 cursor-pointer px-4 p-7 rounded-full"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
