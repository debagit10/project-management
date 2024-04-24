import React, { useEffect, useState } from "react";
import Nav_bar from "../components/Navbar";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import Team_members from "../components/Team_members";
import Team_projects from "../components/Team_projects";
import Meeting from "../components/Meeting";
import Add_project from "../components/Add_project";
import Add_member from "../components/Add_member";
import { useParams } from "react-router-dom";
import axios from "axios";

const View_team = () => {
  const [team, setTeam] = useState<any>([]);
  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const getTeam = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/team/getDetail?team_id=${id}`,
        { headers: config.headers }
      );
      setTeam(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeam();
  }, [id]);

  const data = [
    {
      label: "Outstanding Projects",
      value: "projects",
      desc: <Team_projects />,
    },

    {
      label: "Members",
      value: "members",
      desc: <Team_members />,
    },
    {
      label: "Meeting schedule",
      value: "meeting",
      desc: <Meeting />,
    },
  ];
  return (
    <Nav_bar>
      <div className="p-5">
        <div className="flex flex-col">
          <div>
            <Typography
              variant="h5"
              className="text-2xl"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {team.name}
            </Typography>
          </div>

          <div className="flex justify-end gap-3">
            <Add_member />
            <Add_project />
          </div>
        </div>
        <div className="mt-10">
          <Tabs value="projects">
            <TabsHeader
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </Nav_bar>
  );
};

export default View_team;
