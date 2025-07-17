import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaGithub, FaLinkedinIn, FaPython, FaDatabase, FaSnowflake, FaAws } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiApacheairflow } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Student", "Data Engineer", "Data Analyst"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PERSONAL WEBSITE</h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Muskan Raisinghani</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am an enthusiastic and hard-working student at Northeastern University with a passion for transforming raw information into actionable insights. 
          I've industry experience in product development, optimizing data workflows and implementing innovative solutions, from financial analysis to real-time data streaming. 
          I am a quick learner with excellent communication skills, adept at fostering collaboration within cross-functional teams. 
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href='https://www.linkedin.com/in/muskan-raisinghani/'>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href='https://github.com/muskanRaisinghani23/'>
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href='https://public.tableau.com/app/profile/muskan.deepak.raisinghani/vizzes'>
              <span className="bannerIcon">
                <SiTableau />
              </span>
            </a>           
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <FaDatabase />
            </span>
            <span className="bannerIcon">
              <FaSnowflake />
            </span>
            <span className="bannerIcon">
              <FaAws />
            </span>
            <span className="bannerIcon">
              <SiApacheairflow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner