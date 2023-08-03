import React from "react";

import chat1 from "../assets/chat1.png";
const Enquiry = () => {
  return (
    <>
      <div className=" my-5 enquiry-bg p-5 flex justify-center align-center">
        <div className=" bg-violet-700  w-full md:w-2/3 md:flex lg:flex p-5 rounded-lg text-white ">
          <div  className="md:w-1/2 p-4 w-full">
            <h1 className="text-3xl font-semibold " >Work Enquiry</h1>
            <p className="my-1 font-thin" >Let's work together and i'll help you by all my best</p>
          </div>
          <div   className="md:w-1/2 w-full relative  ">
          <a  href="https://api.whatsapp.com/send?phone=8516064332&text=Hello pushpendra." target="blank" >
          <button  style={{width:"120px"}} class="rounded-md flex    bg-sky-500 p-2 gap-2 chat "> Lets Chat <img className="w-6 h-6" src={chat1} alt="" /> </button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
