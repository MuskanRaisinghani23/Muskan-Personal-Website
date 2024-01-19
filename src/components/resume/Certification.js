import React from "react";
import Title from '../layouts/Title'
import { azureBasic,azureData, azureAI, snowflakeDL, snowflakeDE } from "../../assets/index";
import ProjectsCard from '../projects/ProjectsCard';
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

const Certification = () => {
  return (
    <section
      id="projects"
      className="w-full py-12"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="Certifications & Badges"
          des="Certifications & Badges"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4 gap-2 xl:gap-6">       
        <ProjectsCard
          title="Data Engineering badge by Snowflake"
          src={snowflakeDE}
          icon={<FaLink />}
          link="https://achieve.snowflake.com/d1ee2b9e-fa22-49c5-8665-fa6896ccca7f"
        />
        <ProjectsCard
          title={["Data Lake Warehouse by Snowflake"]}
          src={snowflakeDL}
          icon={<FaLink />}
          link="https://achieve.snowflake.com/def81a21-9b31-4bf2-b607-a0ca036e70c5"
        />
        <ProjectsCard
          title={["Azure Fundamentals",<br />,"AZ-900"]}
          src={azureBasic}
          icon={<FaLink/>}
          link="https://www.credly.com/badges/17a39fc3-e9d4-4c17-8cf8-2baeaad3d74d/public_url"
        />
        <ProjectsCard
          title={["Azure Data Fundamentals",<br />,"DP-900"]}
          src={azureData}
          icon={<FaLink />}
          link="https://www.credly.com/badges/b1200396-3d87-484e-a32d-3baf80434947/public_url"
        />
        {/* <ProjectsCard
          title="Data Application Builder by Snowflake"
          src={projectFour}
          icon={<FaLink />}
          link="https://github.com/MuskanRaisinghani23/CreditCardApprovalPrediction"
        /> */}
      </div>
    </section>
  );
};

export default Certification;
