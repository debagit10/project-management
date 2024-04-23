import React, { useState, useEffect } from "react";
import {
  Dialog,
  Card,
  CardBody,
  Button,
  Typography,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Add_collaborator = ({ member }: { member: any }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [projects, setProjects] = useState([]);
  const [assign, setAssign] = useState(true);
  const [project_id, setProject_id] = useState("");

  const collaborator_email = member.member_email;

  const { id } = useParams();

  const data = {
    project_id,
    collaborator_email,
  };

  const config = { headers: { "Content-type": "application/json" } };

  const add_collaborator = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/collaborator/add`,
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
        return;
      } else if (response.data.message) {
        toast.info(response.data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
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

  const teamProjects = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/project/get?team_id=${id}`,
        { headers: config.headers }
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    teamProjects();
  }, [id]);

  return (
    <>
      <Typography
        onClick={() => setOpen(true)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="text-[#09421C]"
      >
        Assign to project
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
          <CardHeader
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="p-3 text-center"
          >
            Assign {member.member_name} to a project.
          </CardHeader>
          <CardBody
            className="flex flex-col gap-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {projects.map((project: any) => (
              <div className="flex flex-row justify-between">
                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {project.title}
                </Typography>
                <Button
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onClick={() => {
                    setAssign(false);
                    setProject_id(project._id);
                  }}
                  variant="outlined"
                >
                  Assign
                </Button>
              </div>
            ))}
          </CardBody>

          <CardFooter
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="flex flex-col gap-5">
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="text-red-500 w-full"
                variant="outlined"
                onClick={handleOpen}
              >
                Cancel
              </Button>
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="text-white bg-[#09421C] hover:bg-white hover:text-[#09421C] w-full"
                variant="outlined"
                disabled={assign}
                onClick={add_collaborator}
              >
                Confirm
              </Button>
            </div>
          </CardFooter>
        </Card>
        <ToastContainer />
      </Dialog>
    </>
  );
};

export default Add_collaborator;
