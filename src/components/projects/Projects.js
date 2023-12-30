import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PolarSled Govern"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          icon={<FaGlobe/>}
          link="https://www.ltimindtree.com/polarsled/"
        />
        <ProjectsCard
          title="Real time Data Streaming"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/Real-Time-Data-Streaming"
        />
        <ProjectsCard
          title="Cloud Campus"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/CloudCampus"
        />
        <ProjectsCard
          title="Credit Card Approval Prediction System"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/CreditCardApprovalPrediction"
        />
        <ProjectsCard
          title="Investment Analysis and Portfolio Management"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/Investment-Analysis-and-Portfolio-Management"
        />
        <ProjectsCard
          title="Volunteer Management System"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/VolunteerManagement"
        />
      </div>

      <div className="flex justify-center items-center text-center mt-20">
        <a href='https://github.com/MuskanRaisinghani23' target='_blank'>
          <Title
            title="View more"
          />
        </a>
      </div>
    </section>
  );
}

export default Projects