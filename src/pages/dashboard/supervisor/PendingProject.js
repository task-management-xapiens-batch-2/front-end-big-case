import React from "react";
import Jumbotron from "../../../components/Jumbotron.component";
import TableProjectSPV from "../../../components/TableProjectSPV.component";

const PendingProject = () => {
  return (
    <>
     <Jumbotron
        notPlanner={true}
        description={
          "This is All Pending Projects Menu. All projects that are came from planner, will be shown here"
        }
      />
      <TableProjectSPV />
    </>
  );
};

export default PendingProject;
