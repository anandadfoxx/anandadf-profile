import React from "react";

import Contact from "components/home/Contact";
import Intro from "components/home/Intro";
import AboutMe from "components/home/AboutMe";

export default function Home() {
  return (
    <div className="flex-1 sections overflow-auto">
      <Intro />
      <AboutMe />
      <Contact />
    </div>
  );
}