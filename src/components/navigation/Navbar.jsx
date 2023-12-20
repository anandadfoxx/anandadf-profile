import React from "react";
import { Link } from "react-router-dom";

const navList = (
  <ul className="font-['Lora'] font-medium text-xl text-light-beige flex items-center">
    <Link to='/' className="mx-24">Home</Link>
    <Link to='/blog' className="mx-24">Blog</Link>
    <Link to='/contact' className="mx-24">Contact Me</Link>
  </ul>
)

export default function Navbar() {
  return (
    <header className="w-full h-16 fixed z-10 bg-dark-turquoise flex justify-center content-center">
      {navList}
    </header>
  );
};