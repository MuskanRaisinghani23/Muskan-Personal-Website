import React from 'react'
import { AiFillRobot, AiFillSetting } from "react-icons/ai";
import { FaBrain, FaGlobe, FaDatabase } from "react-icons/fa";
import { SiProgress, SiApacheairflow, SiBuildkite } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Data Governance"
          des="I implement robust data governance strategies, ensuring security, cost, and performance optimization 
          throughout the data lifecycle."
          icon={<AiFillSetting />}
          link="https://www.ltimindtree.com/polarsled"
        />
        <Card
          title="Data Pipelining"
          des="I craft end-to-end data pipelines, utilizing a diverse tech stack including Python, Apache Airflow, 
          and Kafka, streamlining data flow for efficient and scalable solutions."
          icon={<SiApacheairflow />}
          link="https://github.com/MuskanRaisinghani23/Real-Time-Data-Streaming"
        />
        <Card
          title="Database Design"
          des="With a wealth of experience, I skillfully design databases, with structured and unstructured data, 
          and optimizing systems for seamless operations."
          icon={<FaDatabase />}
          link="https://github.com/MuskanRaisinghani23/NYPD-arrests-data-pipeline-ADF-to-Snowflake"
        />
        <Card
          title="Data Visualization and Analytics"
          des="
          I recently have started exploring data visualization and analytics,
          leveraging tools like Tableau to transform complex data into actionable insights."
          icon={<SiProgress />}
          link="https://public.tableau.com/app/profile/muskan.deepak.raisinghani/vizzes"
        />
        <Card
          title="Web Scraping"
          des="I proficiently employ web scraping techniques, like Beautiful Soup, and Selenium to extract and synthesize valuable data."
          icon={<FaGlobe />}
          link="https://github.com/MuskanRaisinghani23/JobMatch-Job-Recommendation-System"
        />
        <Card
          title="Data Science"
          des="I leverage data science skills to extract meaningful insights, 
          drive informed decision-making, and optimize processes for impactful results."
          icon={<FaBrain />}
          link="https://github.com/MuskanRaisinghani23/CreditCardApprovalPrediction"
        />
      </div>
    </section>
  );
}

export default Features