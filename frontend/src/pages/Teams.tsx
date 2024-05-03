import React, { useEffect, useState } from "react";
import Nav_bar from "../components/Navbar";
import { Typography, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Add_team from "../components/Add_team";
import { useCookies } from "react-cookie";

const Teams = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  //const [error, setError] = useState();

  const token = cookies.Token;

  const config = { headers: { "Content-type": "application/json" } };

  type Data = {
    token: string;
  };

  const data: Data = { token };

  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/team", {
        params: data,
        headers: config.headers,
      });
      console.log(response.data);
      if (response.data === "Error") {
        navigate("/auth/login");
        return;
      }
      setTeams(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, [data]);

  const TABLE_HEAD = ["Name", "Admin"];

  return (
    <Nav_bar>
      <div className="container m-10 md:w-[80vw] sm:w-[60vw]">
        <div className="flex flex-col">
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

          <div className="flex justify-end">
            <Add_team />
          </div>
        </div>
        <div className="mt-10">
          <Card
            className="w-full "
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {teams.length > 0 ? (
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
                  {teams.map(({ _id, name, admin_name }, index) => {
                    const isLast = index === teams.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr
                        key={name}
                        onClick={() => navigate(`/team/${_id}`)}
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
                            {admin_name}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              "You have no team"
            )}
          </Card>
        </div>
      </div>
    </Nav_bar>
  );
};

export default Teams;
