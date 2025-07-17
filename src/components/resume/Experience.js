import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <section className="w-full flex justify-center px-4 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Tesla */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <div className="py-4 font-titleFont flex flex-col gap-2">
            <p className="text-sm text-designColor tracking-[4px]">Aug 2024 - Jan 2025</p>
            <h2 className="text-2xl font-bold">TESLA Inc.</h2>
          </div>
          <div className="border-l-[6px] border-l-black border-opacity-30 pl-4 flex flex-col gap-4">
            <ResumeCard
              title="Data Engineering Intern"
              subTitle="Field Reliability Engineering"
              result="USA"
              des={[
                "Supported the Field Reliability team at Tesla by developing scalable ETL pipelines and end-to-end data applications.",
                " Collaborated with stakeholders in the Field Quality team to streamline recall tracking and reporting workflows.",
                " Migrated and structured large datasets, improving decision-making around field quality issues.",
              ]}
            />
          </div>
        </motion.div>

        {/* CRISIL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="py-4 font-titleFont flex flex-col gap-2">
            <p className="text-sm text-designColor tracking-[4px]">Sept 2022 - June 2023</p>
            <h2 className="text-2xl font-bold">CRISIL</h2>
          </div>
          <div className="border-l-[6px] border-l-black border-opacity-30 pl-4 flex flex-col gap-4">
            <ResumeCard
              title="Analyst - Data Analytics"
              subTitle="Global Research and Risk Solutions"
              result="India"
              des={["Streamlined operations by automating the transformation of unstructured financial reports into structured tabular formats, reducing processing time.",
                 " Additionally, I played a pivotal role in advancing data extraction and analysis, revealing significant sales and profit trends across various company parameters."
                ]}
            />
          </div>
        </motion.div>

        {/* LTIMindtree */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col"
        >
          <div className="py-4 font-titleFont flex flex-col gap-2">
            <p className="text-sm text-designColor tracking-[4px]">Aug 2020 - Aug 2022</p>
            <h2 className="text-2xl font-bold">LTIMindtree</h2>
          </div>
          <div className="border-l-[6px] border-l-black border-opacity-30 pl-4 flex flex-col gap-4">
            <ResumeCard
              title="Data Engineer"
              subTitle="Snowflake Data - Center of Excellence (COE)"
              result="India"
              des={[
                <>Led the development of <a href="https://www.ltimindtree.com/polarsled/" target="_blank" rel="noopener noreferrer"><u>PolarSled</u></a>, platform for complete Snowflake Data Governance. Designed and implemented frameworks such as Sentry for security monitoring, Daily Briefing for executive reporting, and Data Mesh for decentralized data architecture. Collaborated with cross-functional teams to reduce total cost of ownership by 30%.</>,
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
