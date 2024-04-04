import React, { useState } from "react";
import {
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  CardFooter,
} from "@material-tailwind/react";

const AssignTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div>
      <Typography
        onClick={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="text-center hover:cursor-pointer "
      >
        Assign task
      </Typography>
      <Dialog
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card
          className="mx-auto w-full max-w-[24rem]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardBody
            className="flex flex-col gap-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              variant="h4"
              color="blue-gray"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Assign Task to User
            </Typography>

            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              About
            </Typography>
            <Input
              label="About"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Deadline
            </Typography>
            <Input
              label="Deadline"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              type="date"
            />
            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Attachment(optional)
            </Typography>
            <Input
              label="File"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              type="file"
            />
          </CardBody>

          <CardFooter
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Button
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="text-white bg-[#09421C] hover:bg-white hover:text-[#09421C] w-full"
              variant="outlined"
            >
              Assign
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
};

export default AssignTask;
