import React from "react";
import { Button, Typography, Input } from "@material-tailwind/react";
import img from "../assets/landing-page-img.png";
import Nav_bar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-3">
        <Nav_bar />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:mt-20">
        <div className="md:w-1/2">
          <div className="flex justify-center">
            <Typography className="font-bold mb-4 text-green-900" variant="h5">
              LOGIN
            </Typography>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col w-72 gap-10 ">
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="mt-10 w-72 h-12 text-white hover:bg-white bg-green-900 hover:text-green-900  text-md"
              variant="outlined"
            >
              SUBMIT
            </Button>
          </div>
          <div className="flex justify-center mt-3">
            <Typography>
              Don't have an account?{" "}
              <a
                className="hover:underline hover:cursor-pointer"
                onClick={() => navigate("/auth/signup")}
              >
                Signup
              </a>
            </Typography>
          </div>
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

export default Login;
