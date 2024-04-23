import React, { useEffect, useState } from "react";
import { Typography, Card } from "@material-tailwind/react";
import Task_progress from "./Task_progress";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const Team_projects = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  //const navigate = useNavigate();

  const config = { headers: { "Content-type": "application/json" } };

  const data = {
    team_id: id,
  };

  const getProject = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/project/get",
        { params: data, headers: config.headers }
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, [data]);

  const TABLE_HEAD = ["Title", "Deadline", "Progress"];

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
            {projects.map(({ title, deadline, _id }, index) => {
              const isLast = index === projects.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {title}
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
                      {deadline}
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
                      <Task_progress />
                    </Typography>
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

export default Team_projects;
