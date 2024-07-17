import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./DetailProject.css";

const DetailProject = () => {
  const { id } = useParams();
  console.log(id);

  const projectDetails = useLoaderData();
  console.log(projectDetails);
  const {
    name,
    image,
    tachnologies,
    discriptions,
    frontedGithubLink,
    serverGithubLink,
    liveLink,
    projectPrasentationLink,
  } = projectDetails?.data;
  return (
    <div className="py-24">
      <div className="md:flex md:mx-16 md:gap-20 px-2">
        <div className="md:w-2/5">
          <img src={image} alt="website page" />
        </div>
        <div className="md:w-3/5 mt-10">
          <div className="flex items-center gap-3">
            <h2 className="text-[--main-color] font-semibold text-3xl">
              Project Name:
            </h2>
            <p className="text-3xl text-gray-300">{name}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bttn-box">
              <a href={liveLink} className="bttn">
                Live Project
              </a>
              <a href={frontedGithubLink} className="bttn">
                Front-End Code
              </a>
              <a href={serverGithubLink} className="bttn">
                Back-End Code
              </a>
            </div>
          </div>
          <div className="my-8">
            <h2 className="text-[--main-color] font-semibold text-xl">
              Technologies:
            </h2>
            <p className="text-lg text-gray-300">{tachnologies}</p>
          </div>
          <div className="my-8">
            <h2 className="text-[--main-color] font-semibold text-xl">
              Description:
            </h2>
            <p className="text-lg text-gray-300">{discriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
