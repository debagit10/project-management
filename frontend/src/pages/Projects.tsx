import React from "react";
import { Typography } from "@material-tailwind/react";

import Nav_bar from "../components/Navbar";

const Projects = () => {
  return (
    <Nav_bar>
      <div className="container m-10">
        <div>
          <Typography variant="h5" className="text-2xl">
            Projects
          </Typography>
        </div>
      </div>
    </Nav_bar>
  );
};

export default Projects;
