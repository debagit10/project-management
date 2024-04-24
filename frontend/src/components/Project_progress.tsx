import React, { useEffect, useState } from "react";
import { Progress } from "@material-tailwind/react";
import axios from "axios";

const Project_progress = ({ id }: { id: any }) => {
  const [done, setDone] = useState([]);
  const [tasks, setTask] = useState([]);
  const config = { headers: { "Content-type": "application/json" } };
  const projectTasks = async () => {
    try {
      const tasks = await axios.get(
        `http://localhost:5000/api/task/get?project_id=${id}`,
        { headers: config.headers }
      );
      setTask(tasks.data);
      if (tasks.data.status == true) {
        setDone(tasks.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    projectTasks();
  }, [id]);

  const value = (done.length / tasks.length) * 100;

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
        label={`${value}`}
      />
    </div>
  );
};

export default Project_progress;
