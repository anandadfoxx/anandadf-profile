import React from "react";
import { Link } from "react-router-dom";
import OceanImg from "assets/ocean-bg.jpg";

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundImage: `url(${OceanImg})` }} className="bg-cover bg-center h-full flex flex-col justify-center">
      <h2 className="w-fit mx-auto mb-5 text-6xl text-light-beige text-center">Want to collaborate?</h2>
      <Link className="mx-auto" to='mailto:contact@anandadf.my.id'>
        <div className="w-fit px-7 py-2 rounded-lg bg-light-beige">
          <span className="text-2xl">Email me</span>
        </div>
      </Link>
    </section >
  );
};