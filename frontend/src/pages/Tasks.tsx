import React from "react";

import Nav_bar from "../components/Navbar";
import { Typography } from "@material-tailwind/react";

const Tasks = () => {
  return (
    <Nav_bar>
      <div className="container m-10">
        <div>
          <Typography variant="h5" className="text-2xl">
            Tasks
          </Typography>
        </div>
      </div>
    </Nav_bar>
  );
};

export default Tasks;
