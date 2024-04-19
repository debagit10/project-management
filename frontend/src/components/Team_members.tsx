import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import menu_icon from "../assets/icons/dots.png";
import up_arrow from "../assets/icons/upload.png";
import View_Profile from "./View_Profile";
import { useParams } from "react-router-dom";
import axios from "axios";

const Team_members = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [members, setMembers] = useState([]);

  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const data = {
    team_id: id,
  };

  const getMembers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/member/get", {
        params: data,
        headers: config.headers,
      });
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembers();
  }, [data]);

  const TABLE_HEAD = ["Name", "Email", "Options"];

  return (
    <div className="mt-10">
      <Card
        className="w-full overflow-scroll"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map(({ member_name, member_id, member_email }, index) => {
              const isLast = index === members.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={member_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member_name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member_email}
                    </Typography>
                  </td>

                  <td className={classes}>
                    {/*
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      View
                    </Typography>*/}
                    <Menu>
                      <MenuHandler>
                        <Button
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          className="bg-white"
                        >
                          <img src={menu_icon} className="h-3.5 w-3.5" />
                        </Button>
                      </MenuHandler>
                      <MenuList
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {/* <MenuItem
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <View_Profile />
                        </MenuItem> */}
                        <View_Profile />
                        <Menu
                          placement="right-start"
                          open={openMenu}
                          handler={setOpenMenu}
                          allowHover
                          offset={15}
                        >
                          <MenuHandler className="flex items-center justify-between">
                            <MenuItem
                              placeholder={undefined}
                              onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined}
                            >
                              Assign to project
                              {/* <ChevronUpIcon
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${
                                  openMenu ? "rotate-90" : ""
                                }`}
                              /> */}
                              <img
                                src={up_arrow}
                                className={`h-2.5 w-2.5 transition-transform ${
                                  openMenu ? "rotate-90" : ""
                                }`}
                              />
                            </MenuItem>
                          </MenuHandler>
                          <MenuList
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            <MenuItem
                              placeholder={undefined}
                              onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined}
                            >
                              Project 1
                            </MenuItem>
                            <MenuItem
                              placeholder={undefined}
                              onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined}
                            >
                              Project 2
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </MenuList>
                    </Menu>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Team_members;
