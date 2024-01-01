import React from "react";

import Contact from "components/home/Contact";
import Intro from "components/home/Intro";
import AboutMe from "components/home/AboutMe";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="flex-1 sections overflow-auto">
      <Helmet>
        <title>Home - anandadf</title>
      </Helmet>
      <Intro />
      <AboutMe />
      <Contact />
    </div>
  );
}