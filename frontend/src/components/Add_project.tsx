import React, { useState } from "react";
import {
  Dialog,
  Card,
  CardBody,
  Button,
  Typography,
  Input,
  CardFooter,
} from "@material-tailwind/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_project = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [file, setFile] = useState<string>();
  const [link, setLink] = useState<string>("");

  const handleOpen = () => setOpen((cur) => !cur);

  const { id } = useParams();
  const team_id = id;

  const data = {
    team_id,
    title,
    about,
    deadline,
    file,
    link,
  };

  const config = { headers: { "Content-type": "application/json" } };

  const submit = async () => {
    if (!title || !about || !deadline) {
      toast.error("Please fill required fields", {
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
        `http://localhost:5000/api/project/add?team_id=${team_id}`,
        data,
        config
      );
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.success, {
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
    <>
      <Button
        onClick={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="text-white bg-[#09421C] hover:bg-white hover:text-[#09421C]"
        variant="outlined"
      >
        New project
      </Button>
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
              Add project
            </Typography>

            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Title
            </Typography>
            <Input
              label="Title"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
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
              Attachment(optional)
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
              onClick={submit}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
        <ToastContainer />
      </Dialog>
    </>
  );
};

export default Add_project;
