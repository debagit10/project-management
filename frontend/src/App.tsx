import "./App.css";
import * as React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/auth/signup" Component={Signup} />
      <Route path="/auth/login" Component={Login} />
    </Routes>
  );
}

export default App;
