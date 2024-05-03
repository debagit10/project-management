import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="https://project-management-psi-eight.vercel.app/">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
