import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "../container.css";
import Widget from "./widgets/widget";

const AdminHome = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
