import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Fall 2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Northeastern University</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[320px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="M.S. in Information System"
            subTitle="Coursework: Data Science Engineering Methods and Tools, Application Engineering and Development"
            result="GPA 3.9/4"
            des="At Northeastern University, my goal is to acquire skills that directly translate into industry success, enabling me to proficiently design, implement, and optimize solutions. I am dedicated to bridging the gap between academia and practical application, ensuring a seamless transition to contributing value in the professional landscape."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">University of Mumbai</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[320px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. in Computer Engineering"
            subTitle="Coursework: Big Data Analytics, Database Management System, Data Warehousing, Analysis of Algorithms"
            result="GPA 3.6/4"
            des="During my undergraduate studies at the University of Mumbai, I immersed myself in a rich curriculum encompassing theoretical and practical application in the field of computer engineering. Beyond the classroom, I actively contributed to the academic landscape by publishing a research paper, demonstrating my commitment to the field."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
