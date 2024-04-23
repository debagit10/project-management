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
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignTask = ({ collaborator }: { collaborator: any }) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [deadline, setDeadline] = useState<string>("");
  const [links, setLink] = useState<string>("");
  const [files, setFile] = useState<string>("");
  const [about, setAbout] = useState<string>("");

  const data = {
    itemID: collaborator.collaborator_id,
    item_name: collaborator.collaborator_name,
    userID: "661e84e85fb89b8ed502de2f",
    username: "Void",
    deadline: deadline,
    links: links,
    files: files,
    about: about,
  };

  const config = { headers: { "Content-type": "application/json" } };

  const assign = async () => {
    if (!deadline || !about) {
      toast.warn("Please fill required fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:5000/api/task/assign?project_id=${id}`,
        data,
        config
      );
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.success, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (response.data.message) {
        toast.info(response.data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(response.data.error, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              onChange={(e) => {
                setAbout(e.target.value);
              }}
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
              onChange={(e) => {
                setDeadline(e.target.value);
              }}
            />
            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              File(optional)
            </Typography>
            <Input
              label="File"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              type="file"
              onChange={(e) => {
                setFile(e.target.value);
              }}
            />
            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Link(optional)
            </Typography>
            <Input
              label="Link"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              type="text"
              onChange={(e) => {
                setLink(e.target.value);
              }}
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
              onClick={assign}
            >
              Assign
            </Button>
          </CardFooter>
        </Card>
        <ToastContainer />
      </Dialog>
    </div>
  );
};

export default AssignTask;
