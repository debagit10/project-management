import React, { useEffect, useState } from "react";
import { Typography, Card } from "@material-tailwind/react";
import Nav_bar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import Project_progress from "../components/Project_progress";
import { useCookies } from "react-cookie";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();

  const config = { headers: { "Content-type": "application/json" } };

  const token = cookies.token;

  const userProjects = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/user/project?token=${token}`,
        {
          headers: config.headers,
        }
      );

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userProjects();
  }, [token]);

  const navigate = useNavigate();
  const TABLE_HEAD = ["Title", "Deadline"];

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
            My Projects
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
                {projects.map((project: any, index) => {
                  const isLast = index === projects.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr
                      key={project._id}
                      onClick={() => navigate(`/project/${project._id}`)}
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
                          {project.title}
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
                          {project.deadline}
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

export default Projects;
