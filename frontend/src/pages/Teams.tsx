import React from "react";
import Nav_bar from "../components/Navbar";
import { Typography, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const navigate = useNavigate();

  const TABLE_HEAD = ["Name", "Role"];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      role: "Manager",
    },
    {
      name: "Alexa Liras",
      role: "Developer",
    },
    {
      name: "Laurent Perrier",
      role: "Executive",
    },
    {
      name: "Michael Levi",
      role: "Developer",
    },
    {
      name: "Richard Gran",
      role: "Manager",
    },
  ];
  return (
    <Nav_bar>
      <div className="container m-10 md:w-[80vw] sm:w-[60vw]">
        <div>
          <Typography
            variant="h5"
            className="text-2xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            My Teams
          </Typography>
        </div>
        <div className="mt-10">
          <Card
            className="w-full overflow-scroll"
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
                {TABLE_ROWS.map(({ name, role }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr
                      key={name}
                      onClick={() => navigate("/team/team-detail")}
                      className="hover:bg-blue-gray-100"
                    >
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {name}
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
                          {role}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </Nav_bar>
  );
};

export default Teams;
