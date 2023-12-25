import React from "react";
import { Link } from "react-router-dom";
import MyPhoto from 'assets/MyPhoto.jpg';

export default function AboutMe() {
  return (
    <section id="about-me" className="px-36 h-screen flex flex-row snap-center">
      <div className="photo w-1/2 flex flex-col items-center justify-center">
        <div className="h-8/12 w-5/12 rounded-3xl overflow-hidden" id="img-box">
          <img src={MyPhoto} alt="" style={{ transform: 'translateY(-40px) scale(1.2)' }} />
        </div>
      </div>
      <div className="description w-1/2 flex flex-col justify-center">
        <h2 className="mb-8 text-5xl text-light-beige"><span className="font-bold">About</span> Me</h2>
        {/* Below code will be retrieved from BackEnd */}
        <p className="mb-6 text-2xl text-light-beige text-justify">Continually evolving and contributing with 6+ months of professional experience in Backend and Blockchain development, System Administration, Network Engineering, trusted by several national-tier institutions, and ability to communicate, coordinate, and lead in many projects. Active in Competitive Programming for 2+ years participating at several national-level competitions for achieve great problem solving, and logical thinking skills.</p>
        <Link to='/public/CV.pdf'>
          <div className="w-fit px-7 py-2 rounded-lg bg-light-beige">
            <span className="text-2xl">View CV</span>
          </div>
        </Link>
      </div>
    </section>
  );
};