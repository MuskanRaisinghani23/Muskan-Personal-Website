import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PolarSled - Snowflake Migration and Governance"
          des="Developed and deployed PolarSled Govern Framework - A governance platform providing a 360-degree view of Snowflake. Served as lead developer for three PolarSled accelerators - Sentry, Daily Briefing and Mesh."
          src={projectOne}
          icon={<FaGlobe/>}
          link="https://www.ltimindtree.com/polarsled/"
        />
        <ProjectsCard
          title="NYPD Crime Arrests Data Pipeline"
          des="A scalable data pipeline built using Azure Data Factory and Snowflake to process and analyze NYPD crime and arrest data. The project includes data profiling, dimensional modeling with ER Studio, and transformation via Alteryx workflows."
          src={projectTwo}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/NYPD-arrests-data-pipeline-ADF-to-Snowflake"
        />
        <ProjectsCard
          title="JobMatch - AI based Job Recommendation System"
          des="JobMatch is a Job Recommendation System designed to streamline the job search experience by centralizing the job search process and by analyzing user resumes. JobMatch provides tailored job recommendations from platforms like LinkedIn, Indeed, and SimplyHired."
          src={projectThree}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/JobMatch-Job-Recommendation-System"
        />
        <ProjectsCard
          title="Text classification using BERT, DistilBERT and RoBERTa"
          des="This project aims to classify text data into three categories: FIN_TABLE, NOISE, and TEXT, using state-of-the-art transformer models from the Huggingface library. The models utilized in this proof of concept (POC) include DistilBERT, BERT, and RoBERTa."
          src={projectFour}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/Text-classification-using-BERT-models"
        />
        <ProjectsCard
          title="HomeAI - Room Rental Solution"
          des="HomieAI makes the process of finding budget-friendly shared housing easier and organized. This project aims to bring scattered WhatsApp groups chats and Facebook Marketplace room listings into one place to make process less messy and save time for the users."
          src={projectFive}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/HomeAI"
        />
        <ProjectsCard
          title="PoliSights - Policy Tracking and Compliance System"
          des="PoliSights.ai is an AI-powered platform that helps small businesses stay informed about federal policy changes in real time. The system extracts policies from the Federal Register, processes them using AI, delivers personalized recommendations, and alerts to businesses based on their profile."
          src={projectSix}
          icon={<BsGithub />}
          link="https://github.com/MuskanRaisinghani23/PoliSightsAI-Policy-Tracking-System"
        />
        
      </div>

      <div className="flex justify-center items-center text-center mt-20">
        <a href='https://github.com/MuskanRaisinghani23?tab=repositories' target='_blank'>
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