import React from "react";
import { Button } from "@material-tailwind/react";
import img from "../assets/landing-page-img.png";
import Nav_bar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav_bar />
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:mt-20">
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-bold mb-4 text-green-900">
            NITHUB PROJECT <br />
            MANAGEMENT <br />
            PLATFORM
          </h1>
          <p className="text-lg mb-4 mt-10 ">
            <i>
              Are you ready to take control of your projects, streamline your
              workflow, and empower your team to deliver exceptional results?
              Look no further, the all-in-one project management platform that's
              designed to transform the way you manage projects, from inception
              to completion.
            </i>
          </p>
          <Button
            className="mt-10 w-52 h-14 text-white hover:bg-white bg-green-900 hover:text-green-900  text-md"
            variant="outlined"
            onClick={() => navigate("/auth/signup")}
          >
            Get Started
          </Button>
        </div>

        <div className="mt-3 md:w-1/2 ">
          <img
            src={img}
            alt="Placeholder Image"
            className="w-full h-auto shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
