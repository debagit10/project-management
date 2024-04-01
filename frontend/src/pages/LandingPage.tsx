import React from "react";
import { Button } from "@material-tailwind/react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen">
        <div className="absolute inset-0 bg-bg bg-no-repeat bg-cover blur-sm"></div>
        <img className="p-5 relative z-10 w-52" src={logo2} alt="nithub logo" />

        <div className="flex flex-col justify-center md:mt-32 items-center relative z-10 mt-10">
          <h1 className="text-5xl font-bold mb-4 text-green-900 text-center">
            NITHUB PROJECT <br />
            MANAGEMENT <br />
            PLATFORM
          </h1>
          {/* <p className="text-lg mb-4 mt-10 w-96">
            <i>
              Are you ready to take control of your projects, streamline your
              workflow, and empower your team to deliver exceptional results?
              <br />
              Look no further, the all-in-one project management platform that's
              designed to transform the way you manage projects, from inception
              to completion.
            </i>
          </p> */}
          <Button
            className="mt-10 w-52 h-14 text-white hover:bg-transparent bg-green-900 hover:text-green-900  text-md"
            variant="outlined"
            onClick={() => navigate("/auth/signup")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:mt-20">
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
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
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
      </div> */}
    </>
  );
};

export default LandingPage;
