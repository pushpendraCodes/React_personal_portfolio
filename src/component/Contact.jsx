import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { Divider } from "@mui/material";
const Contact = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <h1 className="text-2xl font-semibold">Stay Connected</h1>
          <p>Rewa MP (INDIA)</p>
          <br />
          <h2 className="text-xl font-semibold">
            pushpendrapatel8055@gmail.com
          </h2>
          <div className="my-5 flex gap-5 justify-center">
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
            <a href="https://github.com/pushpendraCodes">
              <BsGithub className="cursor-pointer" fontSize={25} />
            </a>
            <a href = "mailto: pushpendrapatel8055@gmail.com"   target="blank">
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
        </div>
        <div className="copyright my-5 ">
          <p className="text-center">
            Copyright ©{year} &nbsp; Pushpendra. All rights reserved{" "}
          </p>
        </div>
      </div>
      <Divider  />
    </>
  );
};

export default Contact;
