import React, { useEffect, useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import "./Project.css";

const Project = () => {
  const [allProject, setAllProject] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-backend-ecru-two.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => setAllProject(data));
  }, []);
  console.log(allProject);

  return (
    <div className="project pt-20" id="project">
      <h2 className="heading font-bold">
        My <span className="text-[--main-color]">Projects</span>
      </h2>
      <VerticalTimeline>
        {allProject?.data?.map((project) => (
          <VerticalTimelineElement
            key={project._id}
            className="first-project"
            contentStyle={{ background: "#081b29", color: "#ededed" }}
            contentArrowStyle={{ borderRight: "10px solid  #081b29" }}
            // date="2011 - present"
            iconStyle={{ background: "#081b29", color: "#ededed" }}
            icon={<BiLogoMongodb></BiLogoMongodb>}
          >
            <div>
              <div className="flex items-center mt-[-15px] mb-2">
                <h1 className=" font-bold text-[--text-color]">
                  Project Name:{" "}
                  <span className=" font-medium">{project?.name}</span>
                </h1>
              </div>
              <div class="image-wrap mb-[-10px]">
                <a href="https://rahmanzeb.com">
                  <img src={project?.image} />
                </a>
              </div>
              <div className="bttn-box2 mx-auto  mb-[-10px]">
                <a href={project?.liveLink} className="bttn2">
                  Live Link
                </a>
                <a href={`/detailProject/${project?._id}`} className="bttn2">
                  See Details
                </a>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Project;
// #00abf0
// vertical-timeline-element-subtitle
