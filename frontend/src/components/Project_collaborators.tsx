import React from "react";
import {
  Typography,
  Card,
  Menu,
  MenuHandler,
  MenuList,
  Button,
} from "@material-tailwind/react";
import menu_icon from "../assets/icons/dots.png";

import AssignTask from "./AssignTask";

const Project_collaborators = () => {
  const TABLE_HEAD = ["Name", "Role", ""];
  const TABLE_ROWS = [
    {
      name: "John Michael",
      role: "Manager",
    },
    {
      name: "John Michael",
      role: "Manager",
    },
    {
      name: "John Michael",
      role: "Manager",
    },
    {
      name: "John Michael",
      role: "Manager",
    },
    {
      name: "John Michael",
      role: "Manager",
    },
  ];
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
            {TABLE_ROWS.map(({ name, role }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {name}
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
                      {role}
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
                        <AssignTask />
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

export default Project_collaborators;
