import React from "react";
import { Typography } from "@material-tailwind/react";

import Nav_bar from "../components/Navbar";

const Dashboard = () => {
  return (
    <Nav_bar>
      <div className="container m-10">
        <div>
          <Typography variant="h5" className="text-2xl">
            Dashboard
          </Typography>
        </div>
      </div>
    </Nav_bar>
  );
};

export default Dashboard;
