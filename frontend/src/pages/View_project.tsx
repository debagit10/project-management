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
import Project_detail from "../components/Project_detail";
import Projects_task from "../components/Projects_task";
import Attachment from "../components/Attachment";
import Project_collaborators from "../components/Project_collaborators";
import { useParams } from "react-router-dom";
import axios from "axios";

const View_project = () => {
  const [detail, setDetail] = useState<any>([]);
  const { id } = useParams();

  const config = { headers: { "Content-type": "application/json" } };

  const getProject = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/project/getDetail?project_id=${id}`,
        { headers: config.headers }
      );
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, [id]);

  const data = [
    {
      label: "Overview",
      value: "detail",
      desc: <Project_detail />,
    },
    {
      label: "Tasks",
      value: "tasks",
      desc: <Projects_task />,
    },

    {
      label: "Attachments",
      value: "attachement",
      desc: <Attachment />,
    },
    {
      label: "Collaborators",
      value: "collaborators",
      desc: <Project_collaborators />,
    },
  ];
  return (
    <Nav_bar>
      <div className="p-5">
        <div>
          <Typography
            variant="h5"
            className="text-2xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {detail.title}
          </Typography>
        </div>
        <div className="mt-10">
          <Tabs value="detail">
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

export default View_project;
