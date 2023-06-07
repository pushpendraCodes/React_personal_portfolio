import React from "react";
import left_img from "../assets/skill_left_img.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
// import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { Divider } from "@mui/material";
import { SiMongodb } from "react-icons/si";
const Skills = () => {
  return (
    <>
      <div className="container md:p-16 lg:p-15 p-2">
        <h2 className=" text-3xl font-semibold underline  text-center  message ">
          Technology I Use
        </h2>
        <p className="text-xl text-center my-2 md:my-5">
          Crazy Mern stack developer who wants to explore every TechStack
        </p>

        <div className="md:flex  lg:flex ">
          <div className="md:w-1/2 lg:w-1/2 w-full">
            <img className="md:w-96 lg:w-100 w-full" src={left_img} alt="" />
          </div>
          <div className="md:w-1/2  lg:w-1/2 w-full  ">
            <div className=" flex gap-6 md:gap-8 flex-wrap ">
              <AiFillHtml5
                color="orange"
                className="hover:text-violet-800"
                fontSize={70}
              />
              <DiReact
                color="blue"
                className="hover:text-violet-800"
                fontSize={70}
              />
              <IoLogoJavascript
                color="yellow"
                className="hover:text-violet-800"
                fontSize={70}
              />
              <GrNode
                color="green"
                className="hover:text-violet-800"
                fontSize={70}
              />
              <SiExpress className="hover:text-violet-800" fontSize={70} />
              {/* <BiLogoMongodb className="hover:text-violet-800" fontSize={70} /> */}
              <SiMysql className="hover:text-violet-800" fontSize={70} />
              <BsFillBootstrapFill
                color="blue"
                className="hover:text-violet-800"
                fontSize={70}
              />
              <SiTailwindcss className="hover:text-violet-800" fontSize={70} />
              <SiMongodb className="hover:text-violet-800" fontSize={70} />
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Skills;
