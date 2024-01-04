import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full p-4 md:px-16 sticky z-10 bg-dark-turquoise backdrop-blur-sm flex flex-wrap justify-between">
      <div className="my-auto text-light-beige text-2xl font-bold">
        <Link to='/'>anandadf</Link>
      </div>
      <button onClick={() => setNavOpen(!navOpen)} data-toggle="navbar-hamburger" type="button" class="inline-flex items-center w-8 h-8 my-auto justify-center text-sm rounded-lg md:hidden text-light-beige" aria-controls="navbar-hamburger" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div className={(navOpen ? "block" : "hidden") + " w-full md:flex md:w-auto"} id="navbar-hamburger">
        <ul className="font-['Lora'] font-medium text-xl text-light-beige list-none flex flex-col md:items-center md:flex-row">
          <li className="pt-3 py-1.5 md:py-0 md:px-6 md:pl-0">
            <Link to='/' className="md:px-0 bg-dark-turquoise md:bg-transparent" onClick={() => setNavOpen(false)}><p>Home</p></Link>
          </li>
          <li className="py-1.5 md:py-0 md:px-6">
            <Link to='/blog' className="md:px-0 bg-dark-turquoise md:bg-transparent" onClick={() => setNavOpen(false)}><p>Blog</p></Link>
          </li>
          <li className="py-1.5 pb-0 md:py-0 md:px-6 md:pr-0">
            <Link to='/projects' className="md:px-0 bg-dark-turquoise md:bg-transparent" onClick={() => setNavOpen(false)}><p>Projects</p></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};