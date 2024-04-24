import React, { useEffect, useState } from "react";
import { Progress } from "@material-tailwind/react";
import axios from "axios";

const Project_progress = ({ id }: { id: any }) => {
  const [tasks, setTask] = useState<any>([]);

  const total: any = [];

  const config = { headers: { "Content-type": "application/json" } };

  const projectTasks = async () => {
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

  useEffect(() => {
    projectTasks();
  }, [id]);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === true) {
      total.push(tasks[i]);
    }
  }

  const value = (total.length / tasks.length) * 100;

  return (
    <div>
      <Progress
        variant="gradient"
        value={value}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        color="green"
        size="sm"
        label
      />
    </div>
  );
};

export default Project_progress;
