import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Removed from "./component/removed/Removed";
import "./index.css"; // Import your Tailwind CSS file

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/preview" element={<Removed />} />
    </Routes>
  </Router>
);
