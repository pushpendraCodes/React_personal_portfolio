import React from "react";
import "./hero.css";
import dp from "../assets/dp1.png";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { Divider } from "@mui/material";
import resume from "../assets/resume.pushpendra.updated.pdf";
import ProgressBar from "./ProgressBar";
const Hero = () => {
  return (
    <>
      <div className="container p-3  h-full md:p-16  md:flex mx-auto">

        <div className=" md:w-1/2   w-full p-4 ">
          <p>Hello, my name is</p>
          <div className="flex md:my-5  my-2">
            <h1 className=" name md:text-5xl lg:text-5xl text-2xl font-extrabold   message ">
              Pushpendra Patel
            </h1>
            <span className=" mx-3">
              <img
                className="imogy w-6  wave"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                alt=""
              />
            </span>
          </div>

          <h3 className="text-2xl text-orange-500 font-semibold my-2">
            Mern stack Developer
          </h3>

          <p className="text-base   font-light">
            Hey! My name is Pushpendra patel and and i am mern stack developer I
            am extremely proficient in Front-End Development using HTML5,
            Cascade Style Sheets (CSS3), Bootstrap,SiTailwindcss ,material ui , Advance Javascript, React.Js
            And apart from Front-End, I have good knowledge in Back-End using
            node js , express js & mongo db and MySQL as well and continuously
            engage in trying to extend my skills with new technology.
          </p>
          <div className="my-5 flex gap-5">
            <a
              href="https://www.linkedin.com/in/pushpendra-patel-2b2130235/"
              target="blank"
            >
              <AiFillLinkedin
                className="cursor-pointer"
                fontSize={25}
                color="blue"
              />
            </a>

            <a
              href="https://www.instagram.com/pushpendra_codes/"
              target="blank"
            >
              <FaInstagram
                className="cursor-pointer"
                fontSize={25}
                color="red"
              />
            </a>
            <a href="https://github.com/pushpendraCodes" target="blank">
              <BsGithub className="cursor-pointer" fontSize={25} />
            </a>
            <a href="mailto:pushpendrapatel8055@gmail.com" target="blank">
              <FiMail className="cursor-pointer" fontSize={25} color="red" />
            </a>

            <a href="https://twitter.com/pushpendrpatel" target="blank">
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
              <button className="px-3 text-xs text-white py-2 rounded-full bg-violet-900 hover:bg-violet-800 ">
                CONTACT ME
              </button>
            </a>

            <a href={resume} target="blank">
              <button className="px-6 py-2 text-xs text-white rounded-3xl bg-violet-900 hover:bg-violet-800">
                SEE MY RESUME
              </button>
            </a>
          </div>
        </div>
        <div className=" md:w-1/2 flex justify-center p-1">
          <img
            style={{ width: "200px" ,objectFit: "cover" }}
            className=" h-96  rounded-full "
            src={dp}
            alt=""
          />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Hero;
