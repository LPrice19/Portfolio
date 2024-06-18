import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/Lprice.png';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ml-8">
        <a href="/">
          <img src={logo} alt="logo" className="h-24 w-auto" />
        </a>
      </div>
      <div className="mr-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/leon-price19" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://github.com/LPrice19" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub />
        </a>
        <a href="mailto:leonprice19@icloud.com" className="hover:text-blue-400">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
