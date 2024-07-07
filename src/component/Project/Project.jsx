import React, { useEffect, useState } from "react";
import ass9 from "../../assets/image/ass9.png";
import ass10 from "../../assets/image/assi10.png";
import ass11 from "../../assets/image/ass11.png";
import scic from "../../assets/image/scic.png";
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
    fetch("http://localhost:5000/api/projects")
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
        {/* <VerticalTimelineElement
          className="first-project"
          contentStyle={{ background: "#081b29", color: "#ededed" }}
          contentArrowStyle={{ borderRight: "10px solid  #081b29" }}
          // date="2011 - present"
          iconStyle={{ background: "#081b29", color: "#ededed" }}
          icon={<FaNodeJs></FaNodeJs>}
        >
          <div className="flex items-center mt-[-15px] mb-2">
            <h1 className=" font-bold text-[--text-color]">
              Technologys:{" "}
              <span className=" font-medium">
                ReactJs, JavaScript, Firebase, Node js, Mongodb
              </span>
            </h1>
          </div>
          <div class="image-wrap mb-[-10px]">
            <a href="https://rahmanzeb.com">
              <img src={ass11} />
            </a>
          </div>
          <div className="bttn-box2 mx-auto mb-[-10px]">
            <a
              href="https://github.com/MohammadShahansha/artSchool-client"
              className="bttn2"
            >
              Client Code
            </a>
            <a
              href="https://github.com/MohammadShahansha/artSchool-server"
              className="bttn2"
            >
              Server Code
            </a>
            <a
              href="https://assignment-twelve-dfcd6.web.app/"
              className="bttn2"
            >
              Live Link
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="first-project"
          contentStyle={{ background: "#081b29", color: "#ededed" }}
          contentArrowStyle={{ borderRight: "10px solid  #081b29" }}
          // date="2011 - present"
          iconStyle={{ background: "#081b29", color: "#ededed" }}
          icon={<FaReact></FaReact>}
        >
          <div className="flex items-center mt-[-15px] mb-2">
            <h1 className=" font-bold text-[--text-color]">
              Technologys:{" "}
              <span className=" font-medium">
                ReactJs, JavaScript, Firebase, Node js, Mongodb
              </span>
            </h1>
          </div>
          <div class="image-wrap mb-[-10px]">
            <a href="https://rahmanzeb.com">
              <img src={scic} />
            </a>
          </div>
          <div className="bttn-box2 mx-auto  mb-[-10px]">
            <a
              href="https://github.com/MohammadShahansha/endGame-Client"
              className="bttn2"
            >
              Client Code
            </a>
            <a
              href="https://github.com/MohammadShahansha/endGame-Server"
              className="bttn2"
            >
              Server Code
            </a>
            <a href="https://scic-job-task.web.app/" className="bttn2">
              Live Link
            </a>
          </div>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
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
                Technologys:{" "}
                <span className=" font-medium">
                  ReactJs, JavaScript, Firebase, Node js, Mongodb
                </span>
              </h1>
            </div>
            <div class="image-wrap mb-[-10px]">
              <a href="https://rahmanzeb.com">
                <img src={ass10} />
              </a>
            </div>
            <div className="bttn-box2 mx-auto  mb-[-10px]">
              <a
                href="https://github.com/MohammadShahansha/foodRec"
                className="bttn2"
              >
                Client Code
              </a>
              <a
                href="https://github.com/MohammadShahansha/foodRec-server"
                className="bttn2"
              >
                Server Code
              </a>
              <a href="https://for-assignment-ten.web.app/" className="bttn2">
                Live Link
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
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
                  Technologys:{" "}
                  <span className=" font-medium">{project?.tachnologies}</span>
                </h1>
              </div>
              <div class="image-wrap mb-[-10px]">
                <a href="https://rahmanzeb.com">
                  <img src={project?.image} />
                </a>
              </div>
              <div className="bttn-box2 mx-auto  mb-[-10px]">
                {/* <a href={project?.frontedGithubLink} className="bttn2">
                  Client Code
                </a>
                <a href={project.serverGithubLink} className="bttn2">
                  Server Code
                </a> */}
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
