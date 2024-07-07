import React from "react";
import img from "../../assets/image/img1.png";
import "./About.css";

const About = () => {
  return (
    <div className="about pt-20" id="about">
      <h2 className="heading font-bold">
        About <span className="text-[--main-color] ">Me</span>
      </h2>

      <div className="about-img relative w-[280px] h-[280px] rounded-full flex justify-center items-center">
        <img
          src={img}
          className="w-[250px] h-[250px] rounded-full bg-[#081b29] "
          alt="image"
        />
        <span className="circleSpin"></span>
      </div>
      <div className=" container">
        <h2 className="text-center text-3xl font-bold mb-5">
          Full-Stack Developer
        </h2>
      </div>
      <div className="md:flex md:mx-20 gap-10 px-5">
        <div className="w-full border border-r left-about">
          <div>
            <h2 className="font-semibold text-2xl ">Introduction:</h2>
            <p className="text-gray-400">
              Hi, I'm Md.Shahansha, a passionate full-stack developer skilled in
              creating dynamic and responsive web applications. I specialize in
              both front-end and back-end technologies, ensuring user-friendly
              and highly functional solutions.
            </p>
          </div>
          <div className="my-5">
            <h2 className="font-semibold text-2xl ">
              Education and Certifications:
            </h2>
            <p className="text-gray-400">
              I study in Informatin & Communication Technology from Comilla
              University. However, I achieved 95% marks in the Programming Hero
              course and earned a certification that reflects my commitment to
              continuous learning and excellence. My education has equipped me
              with the skills to tackle complex challenges and deliver top-notch
              solutions.
            </p>
          </div>
          <div className="">
            <h2 className="font-semibold text-2xl ">
              Personal Interests and Values:
            </h2>
            <p className="text-gray-400">
              Beyond coding, I love traveling and exploring new cultures. I'm
              passionate about helping others and sharing my knowledge with the
              community. These interests drive my dedication and integrity in my
              work.
            </p>
          </div>
        </div>
        <div className="w-full right-about">
          <div>
            <h2 className="font-semibold text-2xl ">
              Professional Experience:
            </h2>
            <p className="text-gray-400">
              I have developed projects like PatsSmart, craft & art school,
              shoes shop etc. My expertise includes building RESTful APIs with
              Node.js and Express.js, and creating responsive front-ends with
              React, Next and Tailwind CSS. I also have experience with MongoDB,
              Firebase, and PostgreSQL, and am proficient in integrating
              third-party APIs and optimizing performance.
            </p>
          </div>
          <div className="my-5">
            <h2 className="font-semibold text-2xl ">Languages:</h2>
            <p className="text-gray-400">
              I am fluent in Bangla and have a good command of English, allowing
              me to effectively communicate and collaborate in diverse settings.
            </p>
          </div>
          <div className="my-5">
            <h2 className="font-semibold text-2xl ">Others About Me:</h2>
            <p className="text-gray-400">
              I am unmarrid and 25 years old. I am from Bangladesh and distric
              Kishroeganj. I believe in maintaining a balance between my
              professional and personal life, and these aspects inspire my
              dedication to my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
