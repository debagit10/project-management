import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React from "react";

const Meeting = () => {
  const TABLE_HEAD = ["Title", "Date", "Time"];

  const TABLE_ROWS = [
    {
      title: "A meeting",
      date: "21/1/24",
      time: "9:00AM",
    },
    {
      title: "A meeting",
      date: "21/1/24",
      time: "9:00AM",
    },
    {
      title: "A meeting",
      date: "21/1/24",
      time: "9:00AM",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 ">
      {/**Display all meetings here if there are and a prompt to schedule one if there are not */}
      <div className="w-2/3">
        <Card
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
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
              {TABLE_ROWS.map(({ title, date, time }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
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
                        {date}
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
        </Card>
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
          />
        </div>
        <div className="mt-3">
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-white bg-[#09421C] hover:bg-white hover:text-[#09421C]"
            variant="outlined"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
