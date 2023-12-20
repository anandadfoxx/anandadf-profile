import SocialIcon from "components/home/SocialIcon";
import React from "react";

// Icons
import LinkedinIcon from "assets/linkedin.svg";
import GithubIcon from "assets/github.svg";
import CodeforcesIcon from "assets/codeforces.svg";
import InstagramIcon from "assets/icons8-instagram.svg";

export default function Home() {
  return (
    <section id="intro" className=" h-screen flex flex-col justify-center">
    <h2 className=" text-light-beige text-7xl mb-2 text-center"><span className="font-bold">Ananda</span> Fitra Diraja</h2>
      <h3 className="text-2xl text-white mb-6 text-center">Blockchain | Competitive Programmer | Cloud Computing</h3>
      <div id="socials" className="h-12 w-full flex flex-row justify-center">
        <SocialIcon title='LinkedIn' to='https://www.linkedin.com/in/anandadfoxx/' svgPath={LinkedinIcon}/>
        <SocialIcon title='GitHub' to='https://github.com/oxxydde' svgPath={GithubIcon}/>
        <SocialIcon title='Instagram' to='https://www.instagram.com/anandadfoxx/' svgPath={InstagramIcon}/>
        <SocialIcon title='Codeforces' to='https://codeforces.com/profile/oxxfoxx' svgPath={CodeforcesIcon}/>
      </div>
    </section>
  );
}