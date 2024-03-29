import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Container;
