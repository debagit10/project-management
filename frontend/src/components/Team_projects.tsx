import React, { useEffect } from "react";
import { Typography, Card } from "@material-tailwind/react";
import Task_progress from "./Task_progress";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const Team_projects = () => {
  const { id } = useParams();
  //const navigate = useNavigate();

  const config = { headers: { "Content-type": "application/json" } };

  const team_id = id;

  const getProject = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/project/add",
        { params: team_id, headers: config.headers }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, [id]);

  const TABLE_HEAD = ["Title", "Lead", "Progress"];

  const TABLE_ROWS = [
    {
      title: "A project",
      lead: "John Doe",
      progress: <Task_progress />,
    },
    {
      title: "A project",
      lead: "John Doe",
      progress: <Task_progress />,
    },
    {
      title: "A project",
      lead: "John Doe",
      progress: <Task_progress />,
    },
    {
      title: "A project",
      lead: "John Doe",
      progress: <Task_progress />,
    },
    {
      title: "A project",
      lead: "John Doe",
      progress: <Task_progress />,
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
            {TABLE_ROWS.map(({ title, lead, progress }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={title}>
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
                      {lead}
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
                      {progress}
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
