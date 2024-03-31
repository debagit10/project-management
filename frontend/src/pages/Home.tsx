import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import Calendar from "../components/Calendar";

import Nav_bar from "../components/Navbar";

const Home = () => {
  return (
    <Nav_bar>
      <div className="container m-10">
        <div>
          <Typography variant="h5" className="text-2xl">
            Home
          </Typography>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </Nav_bar>
  );
};

export default Home;
