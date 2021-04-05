import React from "react";
import NavigationBar from "../../../components/NavigationBar.component";
import Jumbotron from "../../../components/Jumbotron.component";
import TableSPV from "../../../components/TableUserSPV.component";
import ButtonBottomRight from "../../../components/ButtonBottomRight.component";
import TableProjectSPV from "../../../components/TableProjectSPV.component";

const DashboardSPV = () => {

  return (
    <>
      <NavigationBar />
      <Jumbotron notPlanner={true} />
      <TableSPV />
      <TableProjectSPV />
      <ButtonBottomRight />
    </>
  );
};

export default DashboardSPV;
