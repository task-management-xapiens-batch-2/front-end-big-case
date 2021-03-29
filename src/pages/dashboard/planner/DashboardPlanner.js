import React from "react";
import JumbotronComponent from "../../../components/Jumbotron.component";
import TablePlanComponent from "../../../components/Table/TablePlan.component";

const DashboardPlanner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <TablePlanComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPlanner;
