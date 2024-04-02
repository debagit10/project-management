import React from "react";
import {
  Button,
  Typography,
  Input,
  Card,
  ButtonGroup,
} from "@material-tailwind/react";
//import img from "../assets/landing-page-img.png";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import search from "../assets/icons/search.png";
import github from "../assets/icons/github.png";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-bg bg-no-repeat bg-cover blur-sm"></div>
        <img className="p-5 relative z-10 w-52" src={logo2} alt="nithub logo" />

        <div className="flex flex-col justify-center md:mt-20 items-center relative z-10 mt-10">
          <Card
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="p-5"
          >
            <div className="flex justify-center">
              <Typography
                className="font-bold mb-4 text-green-900"
                variant="h5"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                SIGNUP
              </Typography>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center flex-col w-72 gap-5 ">
                <Input
                  label="Name"
                  size="lg"
                  type="text"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <Input
                  label="Email"
                  size="lg"
                  type="email"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <Input
                  label="Password"
                  size="lg"
                  type="password"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <Input
                  label="Confrim Password"
                  size="lg"
                  type="password"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="mt-5 w-72 h-12 text-white hover:bg-white bg-green-900 hover:text-green-900  text-md"
                variant="outlined"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                SUBMIT
              </Button>
            </div>
            <div className="flex justify-center mt-2">
              <p>OR Signup with</p>
            </div>
            <div className="flex justify-center mt-2">
              <ButtonGroup
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="text"
              >
                <Button
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <img src={search} className="w-5" alt="google logo" />
                </Button>
                <Button
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <img src={github} className="w-5" alt="github logo" />
                </Button>
              </ButtonGroup>
            </div>

            <div className="flex justify-center mt-3">
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Already have an account?{" "}
                <a
                  className="hover:underline hover:cursor-pointer"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </a>
              </Typography>
            </div>
          </Card>
        </div>
      </div>

      {/* <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:mt-20">
        <div className="md:w-1/2">
          <div className="flex justify-center">
            <Typography
              className="font-bold mb-4 text-green-900"
              variant="h5"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              SIGNUP
            </Typography>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col w-72 gap-10 ">
              <Input
                label="Name"
                size="lg"
                type="text"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                label="Email"
                size="lg"
                type="email"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                label="Password"
                size="lg"
                type="password"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                label="Confrim Password"
                size="lg"
                type="password"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="mt-10 w-72 h-12 text-white hover:bg-white bg-green-900 hover:text-green-900  text-md"
              variant="outlined"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              SUBMIT
            </Button>
          </div>
          <div className="flex justify-center mt-3">
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Already have an account?{" "}
              <a
                className="hover:underline hover:cursor-pointer"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </a>
            </Typography>
          </div>
        </div>

        <div className="mt-3 md:w-1/2 ">
          <img
            //src={img}
            alt="Placeholder Image"
            className="w-full h-auto shadow-lg"
            loading="lazy"
          />
        </div>
      </div> */}
    </>
  );
};

export default Signup;
