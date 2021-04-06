import React from "react";
import NavigationBar from "../../../components/NavigationBar.component";
import Jumbotron from "../../../components/Jumbotron.component";
import TableSPV from "../../../components/TableUserSPV.component";
import ButtonBottomRight from "../../../components/ButtonBottomRight.component";
import TableProjectSPV from "../../../components/TableProjectSPV.component";
import TableTaskListSPV from "../../../components/TableTaskList.component";

const DashboardSPV = () => {

  return (
    <>
      <NavigationBar />
      <Jumbotron notPlanner={true} />
      <TableSPV />
      <TableProjectSPV />
      <TableTaskListSPV />
      <ButtonBottomRight />
    </>
  );
};

export default DashboardSPV;
