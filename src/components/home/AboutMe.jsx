import React from "react";
import { Link } from "react-router-dom";
import MyPhoto from 'assets/MyPhoto.jpg';

export default function AboutMe() {
  return (
    <section id="about-me" className="px-3 lg:px-36 h-full justify-center items-center flex flex-col lg:flex-row">
      <div className="photo w-1/2 flex flex-col items-center justify-center">
        <div className="h-48 md:h-[300px] lg:h-[400px] w-40 md:w-[235px] lg:w-[315px] rounded-3xl overflow-hidden" id="img-box">
          <img src={MyPhoto} alt="" style={{ transform: 'translateY(-40px) scale(1.2)' }} />
        </div>
      </div>
      <div className="description w-10/12 lg:w-1/2 flex flex-col justify-center">
        <h2 className="mt-6 lg:mt-0 mb-3 md:mb-6 text-center lg:text-left text-4xl md:text-5xl text-light-beige"><span className="font-bold">About</span> Me</h2>
        {/* Below code will be retrieved from BackEnd */}
        <p className="mb-6 text-xl md:text-2xl text-light-beige text-justify">Continually evolving and contributing with 6+ months of professional experience in Backend and Blockchain development, System Administration, Network Engineering, trusted by several national-tier institutions, and ability to communicate, coordinate, and lead in many projects. Active in Competitive Programming for 2+ years participating at several national-level competitions.</p>
      </div>
    </section>
  );
};