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
import View_Profile from "./View_Profile";
import { useParams } from "react-router-dom";
import axios from "axios";
import Add_collaborator from "./Add_collaborator";

const Team_members = () => {
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
            {members.map((member: any, index) => {
              const isLast = index === members.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={member.member_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member.member_name}
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
                      {member.member_email}
                    </Typography>
                  </td>

                  <td className={classes}>
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
                      <MenuItem
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <MenuList
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <View_Profile />
                          <Add_collaborator member={member} />
                        </MenuList>
                      </MenuItem>
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
