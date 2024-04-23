import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Project_links = () => {
  const [links, setLinks] = useState([]);
  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const getLinks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/project/getDetail?project_id=${id}`,
        { headers: config.headers }
      );
      setLinks(response.data.links);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
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
          {links.length > 1
            ? links.map((link) => (
                <>
                  <div className="p-3">
                    <a>
                      <div className="flex flex-col">
                        <Typography
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {link}
                        </Typography>
                        <div className="flex justify-end">Copy</div>
                      </div>
                    </a>
                  </div>
                </>
              ))
            : "There are no links in this project"}
        </CardBody>
      </Card>
    </div>
  );
};

export default Project_links;
