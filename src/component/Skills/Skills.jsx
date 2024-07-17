import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [allSkills, setAllSkills] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-backend-ecru-two.vercel.app/api/skills")
      .then((res) => res.json())
      .then((data) => setAllSkills(data));
  }, []);
  // console.log(allSkills);

  return (
    <div className="skills md:mx-[120px] py-24" id="skills">
      <h2 className="heading font-bold">
        My <span className="text-[--main-color]">Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-col">
          <div className="skills-box">
            <div className="skills-content skills-content-one ">
              {allSkills?.data
                ?.slice(0, Math.ceil(allSkills.data.length / 2))
                .map((skill, index) => {
                  return (
                    <div key={index} className="progres">
                      <h2>
                        {skill.skillName} <span>{skill.percentage}%</span>
                      </h2>
                      <div className="bar">
                        <span style={{ width: `${skill.percentage}%` }}></span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="skills-col">
          <div className="skills-box">
            <div className="skills-content skills-content-two">
              {allSkills?.data
                ?.slice(Math.ceil(allSkills.data.length / 2))
                .map((skill, index) => {
                  return (
                    <div key={index} className="progres">
                      <h2>
                        {skill.skillName} <span>{skill.percentage}%</span>
                      </h2>
                      <div className="bar">
                        <span style={{ width: `${skill.percentage}%` }}></span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
