import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Task_progress from "./Task_progress";
import Meeting from "./Meeting";

const Project_detail = () => {
  return (
    <div className="flex flex-row md:flex-col">
      <Card
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div>
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              About:
            </Typography>
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Created by:
            </Typography>
          </div>
          <div className="mt-3 w-60">
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Progress of the project in %
            </Typography>
            <Task_progress />
          </div>
          <div className="mt-3">
            <Meeting />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Project_detail;
