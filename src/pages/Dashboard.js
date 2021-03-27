import React from "react";
import "../styles/Dashboard.scss";
import JumbotronComponent from "../components/Jumbotron.component";
import TableComponent from "../components/Table.component";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <TableComponent title="Initiatives" status="Pending" />
              </div>
              <div className="col-sm">
                <TableComponent title="On Going" status="Not Started" />
              </div>
              <div className="col-sm">
                <TableComponent title="Reject" status="Rejected" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
