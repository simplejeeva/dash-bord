import "./App.css";
import React from "react";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { Homepages } from "./Homepages";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Homepages />
      </div>
      <Navbar />
    </div>
  );
}
export default App;
function Navbar() {
  return <div className="nav">Copyright © Your Website 2023</div>;
}
