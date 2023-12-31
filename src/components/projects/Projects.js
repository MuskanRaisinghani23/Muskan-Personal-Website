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
          des="Developed and deployed PolarSled Govern Framework - A governance platform providing a 360-degree view of Snowflake. I served as lead developer for two PolarSled accelerators - Sentry and Daily Briefing."
          src={projectOne}
          icon={<FaGlobe/>}
          link="https://www.ltimindtree.com/polarsled/"
        />
        <ProjectsCard
          title="Real time Data Streaming"
          des="The project demonstrates an end-to-end data pipeline using Apache Kafka to fetch and stream data from a website. The project is containerized with Docker for streamlined deployment and dependency management."
          src={projectTwo}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/Real-Time-Data-Streaming"
        />
        <ProjectsCard
          title="Cloud Campus"
          des="
          CloudCampus is a Decentralized Virtual Education Platform designed to enhance the education system and provide equal opportunities for students. The project is implemented using Java Swing and JDBC."
          src={projectThree}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/CloudCampus"
        />
        <ProjectsCard
          title="Credit Card Approval Prediction System"
          des="The Credit Card Approval Prediction system leverages regression models, AutoML, SHAP analysis, and advanced data visualization techniques. This comprehensive system showcases a blend of sophisticated modeling, automation, and interpretability."
          src={projectFour}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/CreditCardApprovalPrediction"
        />
        <ProjectsCard
          title="Investment Analysis and Portfolio Management"
          des="This data analytics project uses python's robust modules including Pandas, NumPy, Matplotlib, Seaborn, and Statistics, working extensively with real world Finance data. The project determines powerful relationships between risk, return, and price."
          src={projectFive}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/Investment-Analysis-and-Portfolio-Management"
        />
        <ProjectsCard
          title="Volunteer Management System"
          des="The project functions as a worldwide platform that facilitates communication between volunteers and organizations in need. Constructed using Java in NetBeans, the goal of the project is to build centralized system for Volunteers."
          src={projectSix}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/VolunteerManagement"
        />
      </div>

      <div className="flex justify-center items-center text-center mt-20">
        <a href='https://github.com/MuskanRaisinghani23' target='_blank'>
        <div className="flex flex-col gap-4 font-titleFont">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            <u>VIEW MORE</u>
          </h3>
        </div>
        </a>
      </div>
    </section>
  );
}

export default Projects