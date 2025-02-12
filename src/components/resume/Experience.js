import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion>
    <div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Aug 2024 - Jan 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">TESLA Inc.</h2>
        </div>
        {/* <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
        <div className="mt-2 lgl:mt-4 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Engineering Intern"
            subTitle="Field Reliability Engineering"
            result="USA"
            des={["Streamlined operations by automating the transformation of unstructured financial reports into structured tabular formats, reducing processing time.", <br/>, " Additionally, I played a pivotal role in advancing data extraction and analysis, revealing significant sales and profit trends across various company parameters.", <br/>, "This initiative resulted in a remarkable enhancement in data-driven decision-making within the organization. ", <br/>, "Engineered financial models and analyzed stock market data for the company."]}
          />
        </div>
      </div>
    </div>

    <div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Sept 2022 - June 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">CRISIL</h2>
        </div>
        {/* <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
        <div className="mt-2 lgl:mt-4 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Analyst - Data Analytics"
            subTitle="Global Research and Risk Solutions"
            result="India"
            des={["Streamlined operations by automating the transformation of unstructured financial reports into structured tabular formats, reducing processing time.", <br/>, " Additionally, I played a pivotal role in advancing data extraction and analysis, revealing significant sales and profit trends across various company parameters.", <br/>, "This initiative resulted in a remarkable enhancement in data-driven decision-making within the organization. ", <br/>, "Engineered financial models and analyzed stock market data for the company."]}
          />
        </div>
      </div>
    </div>

    <div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">Aug 2020 - Aug 2022</p>
            <h2 className="text-3xl md:text-4xl font-bold">LTIMindtree</h2>
          </div>
          {/* <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
          <div className="mt-2 lgl:mt-4 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Data Engineer"
              subTitle="Snowflake Data - Center of Excellence (COE)"
              result="India"
              des={["Led the development and implementation of a comprehensive ", <a href="https://www.ltimindtree.com/polarsled/" target="_blank"><u>Snowflake Governance framework</u></a>, ", reducing account governance costs by 30%.", <br/>, "As Lead Developer, enhanced security and optimized performance through a monitoring and alert system for Snowflake accounts.", <br/>, "Designed an SQL stored procedure for ETL operations, facilitating data transfer from Snowflake Data Warehouse to AWS S3 at scheduled intervals.", <br/>, " Implemented an AWS Lambda function to analyze S3 documents and automated insights delivery via email using SES."]}
            />
          </div>
        </div>
      </div>
    </div>
    </motion>
  );
};

export default Experience;