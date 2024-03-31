import React from "react";
import Nav_bar from "../components/Navbar";
import { Typography } from "@material-tailwind/react";

const Teams = () => {
  return (
    <Nav_bar>
      <div className="container m-10">
        <div>
          <Typography variant="h5" className="text-2xl">
            Teams
          </Typography>
        </div>
      </div>
    </Nav_bar>
  );
};

export default Teams;
