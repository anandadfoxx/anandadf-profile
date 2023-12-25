import React from "react";

// Icons
import SocialIcon from "components/home/SocialIcon";
import { ReactComponent as LinkedinIcon } from "assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "assets/github.svg";
import { ReactComponent as CodeforcesIcon } from "assets/codeforces.svg";
import { ReactComponent as InstagramIcon } from "assets/icons8-instagram.svg";
import OceanImg from "assets/ocean-bg.jpg";

export default function Intro() {
  return (
    <section id="intro" style={{ backgroundImage: `url(${OceanImg})` }} className="bg-cover bg-center h-screen flex flex-col justify-center snap-center">
    <h2 className=" text-light-beige text-7xl mx-auto mb-2 text-center"><span className="font-bold">Ananda</span> Fitra Diraja</h2>
      <h3 className="text-2xl text-white mx-auto mb-6 text-center">Blockchain | Competitive Programmer | Cloud Computing</h3>
      <div id="socials" className="h-12 mx-auto flex flex-row justify-center">
        <SocialIcon title='LinkedIn' to='https://www.linkedin.com/in/anandadfoxx/' svg={LinkedinIcon}/>
        <SocialIcon title='GitHub' to='https://github.com/oxxydde' svg={GithubIcon}/>
        <SocialIcon title='Instagram' to='https://www.instagram.com/anandadfoxx/' svg={InstagramIcon}/>
        <SocialIcon title='Codeforces' to='https://codeforces.com/profile/oxxfoxx' svg={CodeforcesIcon}/>
      </div>
    </section>
  );
};