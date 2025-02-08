import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import NGOPage from "./NGOPage";
import DonorsPage from "./DonorsPage";
import VolunteersPage from "./VolunteersPage";
import GovernmentPage from "./GovernmentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ngo" element={<NGOPage />} />
        <Route path="/donors" element={<DonorsPage />} />
        <Route path="/volunteers" element={<VolunteersPage />} />
        <Route path="/government" element={<GovernmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
