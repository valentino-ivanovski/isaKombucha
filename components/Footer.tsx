import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-horizontal ring-1 ring-slate-200 footer-center bg-white text-black-content p-10">
      <aside className="flex flex-col items-center text-center">
        <img
          src="/logos/logo.svg"
          alt="Isa's Kombucha Logo"
          className="w-20 h-20 mb-3"
        />
        <p className="font-bold mb-5">
          Isa's Kombucha
          <br />
          Placeholder text, maybe some quotea
        </p>
        <nav>
        <div className="flex justify-center mb-5 gap-2">
          <a href="#" aria-label="Twitter" className="mx-1">
            <FaFacebook className="w-6 h-6 fill-current" />
          </a>
          <a href="#" aria-label="YouTube" className="mx-1">
            <FaInstagram className="w-6 h-6 fill-current" />
          </a>
          <a href="#" aria-label="Facebook" className="mx-1">
            <FaLinkedin className="w-6 h-6 fill-current" />
          </a>
        </div>
      </nav>
        <p>Isa Kombucha d.o.o. <br />
        Šmartinska cesta 28 <br />
        1000 Ljubljana, Slovenia</p>
      </aside>
    </footer>
  );
};

export default Footer;