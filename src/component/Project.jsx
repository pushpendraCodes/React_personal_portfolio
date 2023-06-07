import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img_project1 from "../assets/project_1.png";
import img_project2 from "../assets/project_2.png";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Divider } from "@mui/material";
const Project = () => {
  return (
    <>
      <div className="container my-4">
        <h2 className=" text-3xl font-semibold underline my-4  text-center  message ">
          Things I Made
        </h2>

        <div className="p-5 lg:flex md:flex gap-5">
          <Card className="md:w-1/2" >
            <a target="blank" href="https://student-grievance-rederessal-portal.netlify.app/">
              <CardMedia
                sx={{ height: 250 ,objectFit:"cover" }}
                image={img_project1}
                title="E-grievance portal"
              />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                E-grievance portal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Made a student e-greivance portal using mern stack technology ,
                where student can raise grievance and admin can resolve their
                grievances.and can do many more things
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://github.com/pushpendraCodes/Mern-Grievance-Reddressal-Portal"
                target="blank"
              >
                <Button size="small">
                  Visit Code <FaGithub className="mx-1" size={16} />
                </Button>
              </a>
              <a
                href="https://student-grievance-rederessal-portal.netlify.app/"
                target="blank"
              >
                <Button size="small">
                  Visit Site <BiLinkExternal className="mx-1" size={16} />
                </Button>
              </a>
            </CardActions>
          </Card>
          <br/>
          <Card  className="md:w-1/2" sx={{}}>
            <a  target="blank" href="https://apnastore-ecom.netlify.app/">
              <CardMedia
               sx={{ height: 250 ,objectFit:"cover" }}
                image={img_project2}
                title="React-e-commerce"
              />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React-e-commerce
              </Typography>
              <Typography variant="body2" color="text.secondary">
                made a react e-commerce website where have all the functionality
                that a e-commerce website can have.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://github.com/pushpendraCodes/React_E-commerce-"
                target="blank"
              >
                <Button size="small">
                  Visit Code <FaGithub className="mx-1" size={16} />
                </Button>
              </a>

              <a href="https://apnastore-ecom.netlify.app/" target="blank">
                <Button size="small">
                  Visit Site <BiLinkExternal className="mx-1" size={16} />
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Project;
