import {
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Data = {
  user_id: string;
  name: string;
  username: string;
};

const Add_team = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  //const [error, setError] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  const data: Data = {
    user_id: "661e84e85fb89b8ed502de2f",
    name: name,
    username: "Void",
  };

  const config = { headers: { "Content-type": "application/json" } };

  const submit = async () => {
    if (!name) {
      toast.error("Please input a name", {
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
        "http://localhost:5000/api/team/add",
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
        className="text-white bg-[#09421C] hover:bg-white hover:text-[#09421C]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        New team
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
              Add team
            </Typography>

            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Name
            </Typography>
            <Input
              label="Name"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              onChange={(e) => setName(e.target.value)}
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

export default Add_team;
