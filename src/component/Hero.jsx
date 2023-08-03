import React from "react";
import "./hero.css";
import dp from "../assets/dp1.png";
import chat from "../assets/chat.png";
import cv from "../assets/cv.png";
import hello from "../assets/hello.png";

import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { Divider } from "@mui/material";
import resume from "../assets/resume.pushpendra.updated.pdf";
import ProgressBar from "./ProgressBar";
import code from "../assets/code.png";
import Clock from "./digitalClock/Clock";

const Hero = () => {
  return (
    <>
      <Clock />
      <div className=" p-3 bg-img my-5 h-full md:p-16  md:flex mx-auto">
        <div className=" md:w-1/2   w-full p-4 ">
          <p className="mb-5 text-xl flex gap-3">
            <span className="text-2xl">
              Hello Folks
            </span>
            <img className="w-10 h-10 wave" src={hello} alt="" />{" "}
            <span className="text-xl">My name is ,</span>
          </p>


          <div className="flex md:my-5  gap-3 my-2">
            <h3 class="bounce lg:text-4xl">
              <span>P</span>
              <span>U</span>
              <span>S</span>
              <span>H</span>
              <span>P</span>
              <span>E</span>
              <span>N</span>
              <span>D</span>
              <span>R</span>
              <span>A</span>
            </h3>

            <h3 class="bounce lg:text-4xl">
              <span>P</span>
              <span>A</span>
              <span>T</span>
              <span>E</span>
              <span>L</span>
            </h3>
          </div>
          <div className="flex gap-4 ">
            <h3 className="text-2xl   text-orange-500 font-semibold lg:my-5">
              Full stack <span className="lg:text-4xl ">Developer</span>
            </h3>

            <span style={{ alignSelf: "center" }} className=" ">
              <img className="imogy  w-6  " src={code} alt="" />
            </span>
          </div>
          <p className="text-base text-justify typed text-blue-800  font-light">
            Hey! My name is Pushpendra patel and and i am full stack developer I
            am extremely proficient in Front-End Development using HTML5,
            Cascade Style Sheets (CSS3), Bootstrap, Tailwindcss ,material ui ,
            Advance Javascript, React.Js And Redux apart from Front-End, I have
            good knowledge in Back-End using node js , express js & mongo db and
            MySQL as well and continuously engage in trying to extend my skills
            with new technology.
          </p>
          <div className="my-5 flex justify-between  lg:justify-start lg:gap-5">
            <a  className="hover:bg-blue-200 p-1"
              href="https://www.linkedin.com/in/pushpendra-patel-2b2130235/"
              target="blank"
            >
              <AiFillLinkedin
                className="cursor-pointer"
                fontSize={25}
                color="blue"
              />
            </a>

            <a className="hover:bg-red-200 p-1"
              href="https://www.instagram.com/pushpendra_codes/"
              target="blank"
            >
              <FaInstagram
                className="cursor-pointer"
                fontSize={25}
                color="red"
              />
            </a>
            <a  className="hover:bg-slate-500 p-1" href="https://github.com/pushpendraCodes" target="blank">
              <BsGithub className="cursor-pointer" fontSize={25} />
            </a>
            <a  className="hover:bg-red-200 p-1" href="mailto:pushpendrapatel8055@gmail.com" target="blank">
              <FiMail className="cursor-pointer" fontSize={25} color="red" />
            </a>

            <a  className="hover:bg-blue-400 p-1" href="https://twitter.com/pushpendrpatel" target="blank">
              <BsTwitter
                className="cursor-pointer"
                fontSize={25}
                color="blue"
              />
            </a>
          </div>
          <div className="mt-10  flex gap-x-8">
            <a
              href="https://api.whatsapp.com/send?phone=8516064332&text=Hello pushpendra."
              target="blank"
            >
              <button className="px-3 text-xs flex gap-1 text-white py-2 rounded-full bg-violet-900 hover:bg-violet-800 ">
                <img className="w-6 h-5" src={chat} alt="" /> CONTACT ME
              </button>
            </a>

            <a href={resume} target="blank">
              <button className="px-6 flex gap-1 py-2 text-xs text-white rounded-3xl bg-violet-900 hover:bg-violet-800">
                <img className="w-5 h-5" src={cv} alt="" /> SEE MY RESUME
              </button>
            </a>
          </div>
        </div>
        <div className="my-photo   md:w-1/2 flex justify-center p-1">
          <img
            style={{ width: "256px", objectFit: "cover" }}
            className=" h-96  rounded-full "
            src={dp}
            alt=""
          />

          {/* <video controls src={video}></video> */}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Hero;
