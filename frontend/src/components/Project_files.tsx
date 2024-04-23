import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Project_files = () => {
  const [files, setFiles] = useState([]);
  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const getFiles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/project/getDetail?project_id=${id}`,
        { headers: config.headers }
      );
      setFiles(response.data.files);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiles();
  }, [id]);
  return (
    <div className="md:px-24 mt-5">
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
          {files.length > 0
            ? files.map((file) => (
                <>
                  <div className="p-3">
                    <Typography
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {file}
                    </Typography>
                  </div>
                  <hr />
                </>
              ))
            : "There are no files in this project"}
        </CardBody>
      </Card>
    </div>
  );
};

export default Project_files;
