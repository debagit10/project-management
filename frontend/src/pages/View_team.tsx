import React from "react";
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

const View_team = () => {
  const data = [
    {
      label: "Outstanding Projects",
      value: "projects",
      desc: "A table shaa",
    },

    {
      label: "Members",
      value: "members",
      desc: <Team_members />,
    },
  ];
  return (
    <Nav_bar>
      <div className="p-5">
        <div>
          <Typography variant="h5" className="text-2xl">
            Team name
          </Typography>
        </div>
        <div className="mt-10">
          <Tabs value="projects">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
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
