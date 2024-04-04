import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Project_links = () => {
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
          <div className="md:p-3">
            <a>
              <div className="flex flex-col">
                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Link
                </Typography>
                <div className="flex justify-end">Copy</div>
              </div>
            </a>
          </div>
          <hr />
          <div className="p-3">
            <a>
              <div className="flex flex-col">
                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Link
                </Typography>
                <div className="flex justify-end">Copy</div>
              </div>
            </a>
          </div>
          <hr />
          <div className="p-3">
            <a>
              <div className="flex flex-col">
                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Link
                </Typography>
                <div className="flex justify-end">Copy</div>
              </div>
            </a>
          </div>
          <hr />
          <div className="p-3">
            <a>
              <div className="flex flex-col">
                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Link
                </Typography>
                <div className="flex justify-end">Copy</div>
              </div>
            </a>
          </div>
          <hr />
        </CardBody>
      </Card>
    </div>
  );
};

export default Project_links;
