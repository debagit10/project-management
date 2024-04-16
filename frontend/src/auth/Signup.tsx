import React, { useState } from "react";
import {
  Button,
  Typography,
  Input,
  Card,
  Spinner,
} from "@material-tailwind/react";
//import img from "../assets/landing-page-img.png";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import search from "../assets/icons/search.png";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Data = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  //const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState("");
  const [cookie, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const data: Data = {
    name: name,
    email: email,
    password: password,
  };

  const config = {
    headers: { "Content-type": "application/json" },
  };

  const handleGoogleSignup = () => {
    window.location.href = "http://localhost:5000/api/user/auth/google";
  };

  const signup = async () => {
    if (!name || !email || !password) {
      toast.warning("Please fill all fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (password != confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/user/signup",
        data,
        config
      );

      if (response) {
        setLoading(false);
        const user = response.data;
        setCookies("username", user.name);
        setCookies("email", user.email);
      }
      if (response.data.error) {
        toast.error(response.data.error, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
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
                  onChange={(e) => setName(e.target.value)}
                />
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
                <Input
                  label="Confrim Password"
                  size="lg"
                  type="password"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="mt-5 w-72 h-12 text-white hover:bg-white bg-green-900 hover:text-green-900 text-md text-center"
                variant="outlined"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={signup}
              >
                {loading ? (
                  <Spinner
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color="green"
                    className="h-6 w-6"
                  />
                ) : (
                  "SUBMIT"
                )}
              </Button>
            </div>
            <div className="flex justify-center mt-2">
              <p>OR </p>
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
                  Sign up with Google
                </Typography>
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
            <ToastContainer />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Signup;
