import React from "react";
import {BsFillChatDotsFill} from "react-icons/bs"
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
          <a href="https://api.whatsapp.com/send?phone=8516064332&text=Hello pushpendra." target="blank" >
          <button  style={{width:"100px"}} class="rounded-md   bg-sky-500 p-1 chat "> Lets Chat  </button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
