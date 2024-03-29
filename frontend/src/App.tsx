import "./App.css";
import * as React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/auth/signup" Component={Signup} />
    </Routes>
  );
}

export default App;