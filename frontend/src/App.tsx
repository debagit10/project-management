import "./App.css";
import * as React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Tasks from "./pages/Tasks";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/auth/signup" Component={Signup} />
      <Route path="/auth/login" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/projects" Component={Projects} />
      <Route path="/teams" Component={Teams} />
      <Route path="/tasks" Component={Tasks} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/inbox" Component={Inbox} />
    </Routes>
  );
}

export default App;
