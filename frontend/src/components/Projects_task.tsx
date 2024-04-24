import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Projects_task = () => {
  const [tasks, setTask] = useState([]);
  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const getTask = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/task/get?project_id=${id}`,
        { headers: config.headers }
      );
      setTask(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const upDateTask = async () => {
  //   try {
  //     const response = await axios.put("http://localhost:5000/api/task/update", )
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getTask();
  }, [id]);

  const TABLE_HEAD = ["", "Assigner", "Assignee", "Deadline"];

  return (
    <div>
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
            {tasks.map((task: any, index) => {
              const isLast = index === tasks.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <input type="checkbox" />
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
                      {task.assignee_name}
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
                      {task.assigner_name}
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
                      {task.deadline}
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

export default Projects_task;
