import React from "react";
import Nav_bar from "../components/Navbar";
import avatar from "../assets/avatar.jpg";
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import MyTasks from "../components/MyTasks";
import MyProjects from "../components/MyProjects";

const Profile = () => {
  const data = [
    {
      label: "My tasks",
      value: "tasks",
      desc: <MyTasks />,
    },
    {
      label: "My recent projects",
      value: "projects",
      desc: <MyProjects />,
    },
  ];
  return (
    <Nav_bar>
      <div className="container m-5">
        <div className="flex flex-col md:flex-row mx-10">
          <div>
            <img
              src={avatar}
              alt="profile picture"
              className="w-60 h-60 rounded-full"
            />
          </div>
          <div className="my-10 mx-5">
            <div>
              <Typography
                variant="h5"
                className="text-3xl"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Josiah Elias
              </Typography>
            </div>
            <div>
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Software Developer
              </Typography>
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Nithub
              </Typography>
            </div>
            <div className="mt-8">
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-5 mx-5">
          <Tabs value="tasks">
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

export default Profile;
