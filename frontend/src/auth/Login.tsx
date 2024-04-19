import React, { useState } from "react";
import { Button, Typography, Input, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import search from "../assets/icons/search.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGoogleSignup = async () => {
    window.location.href = "http://localhost:5000/api/user/auth/google";
  };
  const navigate = useNavigate();

  type Data = {
    email: string;
    password: string;
  };

  const config = { headers: { "Content-type": "application/json" } };

  const login = async () => {
    const data: Data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.get("http://localhost:5000/api/user/login", {
        params: data,
        headers: config.headers,
      });
      if (response.data.message == "Login successful") {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                LOGIN
              </Typography>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center flex-col w-72 gap-5">
                <Input
                  label="Email"
                  size="lg"
                  type="email"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  size="lg"
                  type="password"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                  onChange={(e) => setPassword(e.target.value)}
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
                onClick={login}
              >
                SUBMIT
              </Button>
            </div>

            <div className="flex justify-center mt-2">
              <p>OR</p>
            </div>
            <div>
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={handleGoogleSignup}
                className="bg-white text-black  w-72 h-12 flex items-center gap-4"
                variant="outlined"
              >
                <img src={search} className="w-5" alt="google logo" />
                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="font-medium"
                >
                  Login with Google
                </Typography>
              </Button>
            </div>

            <div className="flex justify-center mt-3">
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Don't have an account?{" "}
                <a
                  className="hover:underline hover:cursor-pointer"
                  onClick={() => navigate("/auth/signup")}
                >
                  Signup
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
              LOGIN
            </Typography>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col w-72 gap-10">
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

export default Login;
