import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Meeting = () => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  const [meetings, setMeeting] = useState([]);

  const { id } = useParams();

  const data = {
    day,
    time,
    title,
    link,
  };

  const config = { headers: { "Content-type": "application/json" } };

  const addMeeting = async () => {
    if (!day || !time || !title) {
      toast.warning("Please fill requird fields", {
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
        `http://localhost:5000/api/meeting/add?team_id=${id}`,
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

  const getMeeting = async () => {
    const data = {
      team_id: id,
    };
    try {
      const response = await axios.get(
        "http://localhost:5000/api/meeting/get",
        { params: data, headers: config.headers }
      );
      console.log(response.data);
      setMeeting(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMeeting();
  }, [id]);

  const TABLE_HEAD = ["Title", "Date", "Time"];

  return (
    <div className="flex flex-col md:flex-row gap-5 ">
      {/**Display all meetings here if there are and a prompt to schedule one if there are not */}
      <div className="w-2/3">
        <Typography
          variant="h5"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Scheduled Meetings
        </Typography>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {meetings.map(({ title, day, time }, index) => {
              const isLast = index === meetings.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={title}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {day}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {time}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/**Schedule meeting section */}
      <div className="md:ml-12">
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="h5"
        >
          Schedule meeting here
        </Typography>
        <div className="w-36 mt-3">
          <Input
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
            label="Meeting title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-36 mt-3">
          <Input
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
            label="Meeting Link"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="w-36 mt-3">
          {/* <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Pick day
        </Typography> */}
          <Input
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
            type="date"
            label="Pick day"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="w-36 mt-3">
          {/* <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Pick day
        </Typography> */}
          <Input
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
            type="time"
            label="Pick time"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-[#09421C]"
            variant="outlined"
            onClick={addMeeting}
          >
            Submit
          </Button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Meeting;
