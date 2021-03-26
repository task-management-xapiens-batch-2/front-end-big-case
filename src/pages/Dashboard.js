import React from "react";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div>
            <ul>
              <li>Dashboard</li>
              <li>Add New Project</li>
            </ul>
            <ul>
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="row">
            <h2>Task List</h2>
            <div className="ml-3">
              <input type="text" placeholder="Search project..." />
            </div>
          </div>
          <div className="col">
            <div
              style={{ backgroundColor: "#efefef", height: 100 }}
              className="row mb-3"
            />
            <div
              style={{ backgroundColor: "#efefef", height: 100 }}
              className="row mb-3"
            />
            <div
              style={{ backgroundColor: "#efefef", height: 100 }}
              className="row mb-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
