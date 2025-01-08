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
            <h2 className="font-semibold text-2xl ">Learning Experience:</h2>
            <p className="text-gray-400 mb-2">
              I have two years of hands-on learning in full-stack web
              development, during which I built various projects using modern
              technologies like React.js, Next.js, Node.js, and MongoDB. My
              projects include e-commerce platforms, management systems, and
              feature-rich dashboards with role-based functionalities.
            </p>
            <p className="text-gray-400">
              I specialize in creating responsive, user-friendly interfaces with
              Tailwind CSS, Material-UI, and Ant Design, and have practical
              experience in authentication, data visualization, and performance
              optimization. My learning journey reflects a passion for building
              impactful applications and continuously improving my skills.
            </p>
          </div>
          <div className="">
            <h2 className="font-semibold text-2xl ">Languages:</h2>
            <p className="text-gray-400">
              I am fluent in Bangla and have a good command of English, allowing
              me to effectively communicate and collaborate in diverse settings.
            </p>
          </div>
        </div>
        <div className="w-full right-about">
          <div className="">
            <h2 className="font-semibold text-2xl ">
              Education and Certifications:
            </h2>
            <p className="text-gray-400">
              Recently I have completed my graduation majoring in Engineering in
              Information and Communication Technology from Comilla University.
              During my study time I completed two programming course form
              Programming Hero institute. One is a
              <a
                href="https://drive.google.com/file/d/102jAvramTfdz16L_S8kgZYa8w0PqEkdv/view"
                className="ml-1 font-semibold"
              >
                "Complete Web Development"
              </a>{" "}
              nd another is{" "}
              <a
                href="https://drive.google.com/file/d/1oVO3kGN4In_r0OfQX6mPpk19LwLEtLXu/view"
                className="font-semibold"
              >
                "Next Level Web Development"
              </a>
            </p>
          </div>

          <div className="my-5">
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
