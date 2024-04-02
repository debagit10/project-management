import { Typography } from "@material-tailwind/react";
import React from "react";
import Nav_bar from "../components/Navbar";
import UrgentTask from "../components/UrgentTask";

const Home = () => {
  return (
    <Nav_bar>
      <div className="p-5">
        <div>
          <Typography
            variant="h5"
            className="text-2xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Home
          </Typography>
        </div>

        <div className=" mx-auto px-4 flex flex-col md:flex-row gap-8 ">
          <div className="md:w-1/2">Recent Projects</div>
          <div className="md:w-1/2">
            <UrgentTask />
          </div>
        </div>
      </div>
    </Nav_bar>
  );
};

export default Home;
