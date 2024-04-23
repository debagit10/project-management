import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Task_progress from "./Project_progress";
import Meeting from "./Meeting";
import axios from "axios";
import { useParams } from "react-router-dom";

const Project_detail = () => {
  const [detail, setDetail] = useState<any>([]);
  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const getProject = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/project/getDetail?project_id=${id}`,
        { headers: config.headers }
      );

      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, [id]);

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
              About: {detail.about}
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
