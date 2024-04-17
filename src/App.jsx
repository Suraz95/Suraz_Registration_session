import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboad";
import Signin from "./components/Signin"
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signIn" element={<Signin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
