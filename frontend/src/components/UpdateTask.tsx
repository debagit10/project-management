import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  Card,
  CardBody,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTask = ({ task }: { task: any }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const task_id = task._id;
  const status = !task.status;

  const body = {
    task_id,
    status,
  };

  const config = { headers: { "Content-type": "application/json" } };

  const update = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/task/updateStatus",
        body,
        config
      );

      if (response.data.success) {
        toast.success(response.data.success, {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () => {
            window.location.reload();
          },
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
      <input type="checkbox" checked={task.status} onClick={handleOpen} />
      <Dialog
        open={open}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        handler={handleOpen}
      >
        <Card
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ToastContainer />
          <CardBody
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="h6"
            >
              {task.status === true
                ? "Mark this task as not done?"
                : "Mark this task as done?"}
            </Typography>
            <div className="flex flex-row justify-end gap-6">
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={update}
              >
                Yes
              </Button>
            </div>
          </CardBody>
        </Card>
      </Dialog>
    </div>
  );
};

export default UpdateTask;
