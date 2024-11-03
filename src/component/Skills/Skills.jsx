import React, { useEffect, useState } from "react";
import "./Skills.css";
import html from "../../assets/skills/HTML.png";
import css from "../../assets/skills/CSS.png";
import tailwind from "../../assets/skills/TailwindCSS.png";
import js from "../../assets/skills/js.png";
import ts from "../../assets/skills/ts.png";
import reactJs from "../../assets/skills/react.js.png";
import redux from "../../assets/skills/redux.png";
import firebase from "../../assets/skills/Firebase.png";
import nextjs from "../../assets/skills/next.js.png";
import bootsTrap from "../../assets/skills/bootstrap.png";
import daisyUi from "../../assets/skills/DaisyUI.png";
import materialUi from "../../assets/skills/MaterialUI.png";
import antD from "../../assets/skills/antDesign.png";
import shadCn from "../../assets/skills/shadcnUI.png";

import node from "../../assets/skills/nodejs.png";
import express from "../../assets/skills/Express.png";
import jwt from "../../assets/skills/JWT.png";
import prisma from "../../assets/skills/Prisma.png";
import graphQL from "../../assets/skills/graphQL.png";

import mongodb from "../../assets/skills/MongoDB.png";
import mongoose from "../../assets/skills/Mongoose.png";
import postgresSql from "../../assets/skills/postgreSQL.png";
import sql from "../../assets/skills/sql.png";
// const skillArray = [
//   {
//     image: html,
//   },
//   {
//     image: css,
//   },
//   {
//     image: tailwind,
//   },
//   {
//     image: reactJs,
//   },
//   {
//     image: redux,
//   },
//   {
//     image: js,
//   },
//   {
//     image: ts,
//   },
//   {
//     image: mongodb,
//   },
//   {
//     image: mongoose,
//   },
//   {
//     image: firebase,
//   },
//   {
//     image: node,
//   },
//   {
//     image: expr,
//   },
//   {
//     image: nextjs,
//   },
// ];

const frontEndSkill = [
  { image: html, name: "HTML" },
  { image: css, name: "CSS" },
  { image: tailwind, name: "Tailwind CSS" },
  { image: bootsTrap, name: "BootsTrap" },
  { image: js, name: "JavaScript" },
  { image: reactJs, name: "React" },
  { image: ts, name: "TypeScript" },
  { image: redux, name: "Redux" },
  { image: nextjs, name: "Next.js" },
  { image: firebase, name: "Firebase" },
  { image: daisyUi, name: "Daisy Ui" },
  { image: materialUi, name: "Materiail Ui" },
  { image: antD, name: "ant Design" },
  { image: shadCn, name: "shadCn Ui" },
];
const backendSkills = [
  { image: node, name: "Node.js" },
  { image: express, name: "Express.js" },
  { image: jwt, name: "JWT" },
  { image: prisma, name: "Prisma" },
  { image: graphQL, name: "Applo GraphQL" },
];
const dataBase = [
  { image: mongodb, name: "Node.js" },
  { image: mongoose, name: "Express.js" },
  { image: postgresSql, name: "PostgresSQL" },
  { image: sql, name: "SQL" },
];
const Skills = () => {
  const [allSkills, setAllSkills] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-backend-ecru-two.vercel.app/api/skills")
      .then((res) => res.json())
      .then((data) => setAllSkills(data));
  }, []);
  // console.log(allSkills);

  return (
    // <div className="skills md:mx-[120px] py-24" id="skills">
    //   <h2 className="heading font-bold">
    //     My <span className="text-[--main-color]">Skills</span>
    //   </h2>
    //   <div className="skills-row">
    //     <div className="skills-col">
    //       <div className="skills-box">
    //         <div className="skills-content skills-content-one ">
    //           {allSkills?.data
    //             ?.slice(0, Math.ceil(allSkills.data.length / 2))
    //             .map((skill, index) => {
    //               return (
    //                 <div key={index} className="progres">
    //                   <h2>
    //                     {skill.skillName} <span>{skill.percentage}%</span>
    //                   </h2>
    //                   <div className="bar">
    //                     <span style={{ width: `${skill.percentage}%` }}></span>
    //                   </div>
    //                 </div>
    //               );
    //             })}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="skills-col">
    //       <div className="skills-box">
    //         <div className="skills-content skills-content-two">
    //           {allSkills?.data
    //             ?.slice(Math.ceil(allSkills.data.length / 2))
    //             .map((skill, index) => {
    //               return (
    //                 <div key={index} className="progres">
    //                   <h2>
    //                     {skill.skillName} <span>{skill.percentage}%</span>
    //                   </h2>
    //                   <div className="bar">
    //                     <span style={{ width: `${skill.percentage}%` }}></span>
    //                   </div>
    //                 </div>
    //               );
    //             })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="skills md:mx-[120px] py-24" id="skills">
      <h2 className="heading font-bold">
        My <span className="text-[--main-color]">Skills</span>
      </h2>
      <div>
        <h2 className=" text-3xl font-bold px-5 my-5">
          Front-<span className="text-[--main-color]">End:</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-5 px-5">
          {frontEndSkill.map((item, index) => {
            return (
              <div key={index} className="each-skill border-4">
                <div className="border-fixe">
                  <img src={item.image} alt="skill" className="img-style" />
                  <span className="skill-name text-2xl flex items-center justify-center text-center">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className=" text-3xl font-bold px-5 mt-10 mb-5">
          Back-<span className="text-[--main-color]">End:</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-5 px-5">
          {backendSkills.map((item, index) => {
            return (
              <div key={index} className="each-skill border-4">
                <div className="border-fixe">
                  <img src={item.image} alt="skill" className="img-style" />
                  <span className="skill-name text-2xl flex items-center justify-center text-center">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className=" text-3xl font-bold px-5 mt-10 mb-5">
          Data<span className="text-[--main-color]">base:</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-5 px-5">
          {dataBase.map((item, index) => {
            return (
              <div key={index} className="each-skill border-4">
                <div className="border-fixe">
                  <img src={item.image} alt="skill" className="img-style" />
                  <span className="skill-name text-2xl flex items-center justify-center text-center">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
