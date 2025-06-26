import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-horizontal ring-1 ring-slate-200 footer-center bg-white text-black-content w-full p-10">
      <aside className="flex flex-col items-center text-center">
        <img
          src="/logos/logo.svg"
          alt="Isa's Kombucha Logo"
          className="w-20 h-20 mb-3"
        />
        <p className="font-bold mb-5">
          Isa's Kombucha
          <br />
          In a world full of dead drinks - be alive. Be raw.
        </p>
        <nav>
        <div className="flex justify-center mb-5 gap-2">
          <a href="https://www.facebook.com/isakombucha/" aria-label="Twitter" className="mx-1">
            <FaFacebook className="w-6 h-6 fill-current" />
          </a>
          <a href="https://www.instagram.com/isakombucha/?hl=en" aria-label="YouTube" className="mx-1">
            <FaInstagram className="w-6 h-6 fill-current" />
          </a>
          <a href="https://www.linkedin.com/company/isa-s-kombucha/?originalSubdomain=si" aria-label="Facebook" className="mx-1">
            <FaLinkedin className="w-6 h-6 fill-current" />
          </a>
        </div>
      </nav>
      <div className="mb-5">
        <a href="mailto:hello@isakombucha.com" className=" underline">
          hello@isakombucha.com
        </a>
      </div>
        <p>Isa Kombucha d.o.o. <br />
        Šmartinska cesta 28 <br />
        1000 Ljubljana, Slovenia</p>
      </aside>
    </footer>
  );
};

export default Footer;