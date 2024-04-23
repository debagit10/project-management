import React from "react";
import { Progress } from "@material-tailwind/react";

const Project_progress = () => {
  return (
    <div>
      <Progress
        variant="gradient"
        value={50}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        color="green"
        size="sm"
      />
    </div>
  );
};

export default Project_progress;
