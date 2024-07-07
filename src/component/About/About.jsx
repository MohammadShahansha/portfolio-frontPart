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
      <div className="flex md:mx-20 gap-10">
        <div className="w-full border border-r left-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
          necessitatibus obcaecati? Vero repellendus expedita veniam cumque cum,
          reiciendis soluta.
        </div>
        <div className="w-full right-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non
          assumenda dolor molestias mollitia vitae perspiciatis reiciendis ipsam
          molestiae delectus doloremque, ratione quam sed dignissimos sapiente
          ducimus sit vel sint?
        </div>
      </div>
    </div>
  );
};

export default About;
