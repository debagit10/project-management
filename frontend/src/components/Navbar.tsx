import React from "react";
import { Button } from "@material-tailwind/react";
import { Navbar } from "@material-tailwind/react";
import logo from "../assets/logo.png";

const Nav_bar = () => {
  return (
    <Navbar className="mt-4 mx-auto max-w-screen-xl  lg:py-4 bg-green-900">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <img src={logo} alt="Nithub logo" />
        <div className="flex items-center gap-x-1">
          <Button
            variant="text"
            size="sm"
            className="lg:inline-block text-white hover:underline bg-transparent"
          >
            <span>LogIn</span>
          </Button>
          <Button
            variant="filled"
            size="sm"
            className="lg:inline-block bg-white text-green-900 hover:underline"
          >
            <span>Sign in</span>
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav_bar;
