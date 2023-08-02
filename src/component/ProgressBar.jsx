import React from "react";

const ProgressBar = ({ bgcolor, progress, height, tech, img }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 40,

  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 5,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div className="flex gap-2 justify-between ">
        <p className="text-xs text-orange-400 font-semibold p-2">{tech}</p>
        <img className="mr-3" style={{ width: "40px", height: "40px" }} src={img} alt="" />
      </div>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
