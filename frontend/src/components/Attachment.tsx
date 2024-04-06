import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Project_files from "./Project_files";
import Project_links from "./Project_links";

const Attachment = () => {
  const data = [
    {
      label: "Files",
      value: "files",
      desc: <Project_files />,
    },
    {
      label: "Links",
      value: "links",
      desc: <Project_links />,
    },
  ];
  return (
    <div>
      <Tabs value="files">
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
  );
};

export default Attachment;
