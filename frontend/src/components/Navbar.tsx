import React, { ReactNode, useState } from "react";
import {
  Avatar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Drawer,
} from "@material-tailwind/react";
import { Navbar } from "@material-tailwind/react";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";

import { useNavigate } from "react-router-dom";

interface ContainerProps {
  children: ReactNode;
}

const Nav_bar: React.FC<ContainerProps> = ({ children }) => {
  const [active, setActive] = useState();
  const [open, setOpen] = useState(true);

  const handleSidebar = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="h-16 w-full" style={{ backgroundColor: "#04230C" }}>
        <div className=" mx-auto flex items-center justify-between text-blue-gray-900 p-3 ">
          <div className="flex gap-3">
            <i
              className="hover:cursor-pointer pt-3 text-white"
              onClick={() => handleSidebar()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                />
              </svg>
            </i>
            <img src={logo} alt="Nithub logo" className="w-20" />
          </div>
          <div></div>
          <div className="flex items-center gap-4">
            <Avatar src={avatar} alt="avatar" />
            <div className="hidden md:block">
              <Typography variant="h6" color="white">
                Josiah Elias
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        {open && (
          <div
            className={`h-[calc(100vh-4rem)] w-52 max-w-[20rem] p-4  md:block`}
            style={{ backgroundColor: "#04230C" }}
          >
            <List className="flex gap-5">
              <ListItem
                className={
                  active == 0 ? "bg-white text-black w-40" : "text-white w-40"
                }
                onClick={() => {
                  setActive(0), navigate("/home");
                }}
              >
                <ListItemPrefix>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        fill="currentColor"
                        d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
                      />
                    </svg>
                  </i>
                </ListItemPrefix>
                <Typography variant="h6">Home</Typography>
              </ListItem>
              <ListItem
                className={
                  active == 1 ? "bg-white text-black w-40" : "text-white w-40"
                }
                onClick={() => {
                  setActive(1), navigate("/dashboard");
                }}
              >
                <ListItemPrefix>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        fill="currentColor"
                        d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"
                      />
                    </svg>
                  </i>
                </ListItemPrefix>
                <Typography variant="h6">Dashboard</Typography>
              </ListItem>
              <ListItem
                className={
                  active == 2 ? "bg-white text-black w-40" : "text-white w-40"
                }
                onClick={() => {
                  setActive(2), navigate("/inbox");
                }}
              >
                <ListItemPrefix>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        fill="currentColor"
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z"
                      />
                    </svg>
                  </i>
                </ListItemPrefix>
                <Typography variant="h6">Inbox</Typography>
              </ListItem>
              <ListItem
                className={
                  active == 3 ? "bg-white text-black w-40" : "text-white w-40"
                }
                onClick={() => {
                  setActive(3), navigate("/projects");
                }}
              >
                <ListItemPrefix>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        fill="currentColor"
                        d="M120-120q-33 0-56.5-23.5T40-200v-520h80v520h680v80H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h200l80 80h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Zm0-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z"
                      />
                    </svg>
                  </i>
                </ListItemPrefix>
                <Typography variant="h6">Projects</Typography>
              </ListItem>
              <ListItem
                className={
                  active == 4 ? "bg-white text-black w-40" : "text-white w-40"
                }
                onClick={() => {
                  setActive(4), navigate("/teams");
                }}
              >
                <ListItemPrefix>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        fill="currentColor"
                        d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"
                      />
                    </svg>
                  </i>
                </ListItemPrefix>
                <Typography variant="h6">Teams</Typography>
              </ListItem>
              <ListItem
                onClick={() => {
                  setActive(5), navigate("/tasks");
                }}
                className={
                  active == 5 ? "bg-white text-black w-40" : "text-white w-40"
                }
              >
                <ListItemPrefix>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        fill="currentColor"
                        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"
                      />
                    </svg>
                  </i>
                </ListItemPrefix>
                <Typography variant="h6">Tasks</Typography>
              </ListItem>
            </List>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Nav_bar;
