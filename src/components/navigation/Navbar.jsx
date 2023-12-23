import React from "react";
import { Link } from "react-router-dom";

const navList = (
  <ul className="font-['Lora'] font-medium text-xl text-light-beige flex items-center">
    <Link to='/' className="mx-24">Home</Link>
    <Link to='/blog' className="mx-24">Blog</Link>
    <Link to='/projects' className="mx-24">Projects</Link>
  </ul>
)

export default function Navbar() {
  return (
    <header className="w-full h-16 fixed z-10 bg-dark-turquoise/50 backdrop-blur-sm flex justify-center content-center">
      {navList}
    </header>
  );
};