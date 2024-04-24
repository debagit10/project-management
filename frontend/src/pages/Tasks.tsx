import React, { useEffect, useState } from "react";
import axios from "axios";

import Nav_bar from "../components/Navbar";
import { Typography, Card } from "@material-tailwind/react";

const userID = "661e84e85fb89b8ed502de2f";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const config = { headers: { "Content-type": "application/json" } };

  const getTasks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/user/task?userID=${userID}`,
        { headers: config.headers }
      );

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [userID]);

  const TABLE_HEAD = ["Task", "Assigner", "Deadline"];

  return (
    <Nav_bar>
      <div className="container m-10 md:w-[80vw] sm:w-[60vw]">
        <div className="flex flex-row justify-between">
          <Typography
            variant="h5"
            className="text-2xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            My Tasks
          </Typography>
        </div>
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
                {tasks.map((task: any, index) => {
                  const isLast = index === task.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={task._id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {task.about}
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
      </div>
    </Nav_bar>
  );
};

export default Tasks;
