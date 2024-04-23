import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  Menu,
  MenuHandler,
  MenuList,
  Button,
} from "@material-tailwind/react";
import menu_icon from "../assets/icons/dots.png";
import { useParams } from "react-router-dom";
import axios from "axios";

import AssignTask from "./AssignTask";

const Project_collaborators = () => {
  const [collaborators, setCollaborators] = useState<any>([]);
  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const getCollaborators = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/collaborator/get?project_id=${id}`,
        { headers: config.headers }
      );

      setCollaborators(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollaborators();
  }, [id]);

  const TABLE_HEAD = ["Name", "Role", ""];

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
            {collaborators.map((collaborator: any, index: any) => {
              const isLast = index === collaborators.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={collaborator.collaborator_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {collaborator.collaborator_name}
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
                      {collaborator.role}
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
                      <MenuList
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        onClick={() =>
                          console.log(
                            collaborator.collaborator_id,
                            collaborator.collaborator_name,
                            id
                          )
                        }
                      >
                        <AssignTask collaborator={collaborator} />
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
