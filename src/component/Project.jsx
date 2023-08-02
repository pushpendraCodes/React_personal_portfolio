import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img_project1 from "../assets/project_1.png";
import img_project2 from "../assets/project_2.png";
import img_project3 from "../assets/project_3.png";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
const Project = () => {
  const project = [
    {
      thumbnail: img_project1,
      title: "E-grievance portal",
      live_url: "https://student-grievance-rederessal-portal.netlify.app",
      github_url:
        "https://github.com/pushpendraCodes/Mern-Grievance-Reddressal-Portal",
      desc: "Made a student e-greivance portal using mern stack technology where student can raise grievance and admin can resolve their grievances.and can do many more things",
    },
    {
      thumbnail: img_project2,
      title: "e-commerce",
      live_url: "https://apnastore-ecom.netlify.app/",
      github_url: "https://github.com/pushpendraCodes/React_E-commerce",
      desc: "made a react e-commerce website where have all the functionalit  that a e-commerce website can have",
    },
    {
      thumbnail: img_project3,
      title: "Facebook Clone",
      live_url: "https://facebookpushpendra.netlify.app/",
      github_url: "https://github.com/pushpendraCodes/Mern-Facebook-clone-",
      desc: "Made a facebook clone where user can register , login , and share his post and like the post  and follow to friends and change his profile and cover image as well",
    },
  ];

  return (
    <>
      <div className=" my-4 project-bg">
        <h2 className=" text-3xl font-semibold underline my-4  text-center  message ">
          Things I Made
        </h2>

        <div className="p-5 md:grid  lg:grid-cols-3  grid grid-cols-1 gap-4">
          {project.map((item, i) => {
            return(


            <Card  sx={{padding:"15px"}} key={i} className="">
              <a  href={item.live_url}>
                <img

                  src={item.thumbnail}
                  title="E-grievance portal"
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {item.title}
                </Typography>
                <Typography sx={{fontSize:"12px"}}  variant="body2" color="text.secondary ">
                 {item.desc}
                </Typography>
              </CardContent>
              <CardActions  >
                <a href={item.github_url} >
                  <Button size="small">
                    Visit Code <FaGithub className="mx-1" size={16} />
                  </Button>
                </a>
                <a href={item.live_url} >
                  <Button  size="small">
                    Visit Site <BiLinkExternal className="mx-1" size={16} />
                  </Button>
                </a>
              </CardActions>
            </Card>)
          })}

          <br />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Project;
