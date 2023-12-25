import React from "react";

import Contact from "components/home/Contact";
import Intro from "components/home/Intro";
import AboutMe from "components/home/AboutMe";

export default function Home() {
  return (
    <div className="h-screen sections overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <Intro />
      <AboutMe />
      <Contact />
    </div>
  );
}