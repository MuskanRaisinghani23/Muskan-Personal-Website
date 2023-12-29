import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Sept 2022 - June 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">CRISIL</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Research Analyst - Data Analytics"
            subTitle="Global Research and Risk Solutions"
            result="India"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.oogle's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Aug 2020 - Aug 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Larsen & Toubro Infotech</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Engineer"
            subTitle="Snowflake Data Center of Excellence (COE)"
            result="India"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.oogle's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
