import React from "react";

import Contact from "components/home/Contact";
import Intro from "components/home/Intro";

export default function Home() {
  return (
    <div className="h-screen sections overflow-y-scroll snap-mandatory snap-y scrollbar-hide">
      <Intro />
      <Contact />
    </div>
  );
}