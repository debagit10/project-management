import React, { useEffect, useState } from "react";
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

const Add_member = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  //const [error, setError] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };
  const data = {
    userEmail: email,
  };

  const submit = async () => {
    if (!email) {
      toast.error("Please input the user's email", {
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
        `http://localhost:5000/api/member/add?team_id=${id}`,
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
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(id);
  });

  return (
    <>
      <Button
        onClick={handleOpen}
        className="text-[#09421C]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        variant="outlined"
      >
        Add Member
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
              Add member
            </Typography>

            <Typography
              className="-mb-2"
              variant="h6"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Email
            </Typography>
            <Input
              label="Email"
              size="lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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

export default Add_member;
