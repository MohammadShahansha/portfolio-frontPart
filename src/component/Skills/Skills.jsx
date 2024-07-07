import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills md:mx-[120px] py-24" id="skills">
      <h2 className="heading font-bold">
        My <span className="text-[--main-color]">Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-col">
          <div className="skills-box">
            <div className="skills-content skills-content-one">
              <div className="progres">
                <h2>
                  HTML <span>90%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  CSS <span>80%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  Tailwind CSS <span>90%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  Bootstrap CSS <span>65%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  JavaScript <span>75%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  ReactJs <span>80%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  NextJs <span>80%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-col">
          <div className="skills-box">
            <div className="skills-content skills-content-two">
              <div className="progres">
                <h2>
                  Firebase<span>75%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  MongoDB <span>80%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  NodeJs <span>50%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  ExpressJs <span>70%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  Rest API <span>75%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  Stripe<span>70%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progres">
                <h2>
                  Redux<span>75%</span>
                </h2>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
