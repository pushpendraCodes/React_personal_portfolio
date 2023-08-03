import React from "react";
import left_img from "../assets/skill_left_img.jpg";
import tech from "../assets/tech.png";
import coding from "../assets/coding.png";
import code from "../assets/code.png";
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
import ProgressBar from "./ProgressBar";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import js from "../assets/js.png";
import redux from "../assets/redux.png";
import node from "../assets/node-js.png";
const Skills = () => {
  return (
    <>
      <h2 className=" text-3xl mb-3 font-semibold underline text-black text-center  message ">
        Technology I Use

      </h2>

      <div className=" skill md:p-16 lg:p-15 p-2">
        <div className="md:flex  lg:flex ">
          <div
            style={{ alignItems: "center" }}
            className="md:w-1/2 lg:w-1/2 w-full flex "
          >
            <img className=" " src={left_img} alt="" />
          </div>
          <div className="md:w-1/2  lg:w-1/2 w-full  ">
            <div>
              <ProgressBar
                tech="HTML5"
                img={html}
                bgcolor="orange"
                progress="90"
                height={30}
              />
              <ProgressBar
                tech="CSS"
                img={css}
                bgcolor="blue"
                progress="75"
                height={30}
              />
              <ProgressBar
                tech="JAVASCRIPT"
                img={js}
                bgcolor="yellow"
                progress="70"
                height={30}
              />
              <ProgressBar
                tech="REACT JS"
                img={react}
                bgcolor="skyblue"
                progress="80"
                height={30}
              />
              <ProgressBar
                tech="REDUX"
                img={redux}
                bgcolor="darkblue"
                progress="80"
                height={30}
              />
              <ProgressBar
                tech="NODE JS"
                img={node}
                bgcolor="green"
                progress="75"
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Skills;
