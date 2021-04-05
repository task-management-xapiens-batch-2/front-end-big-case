import React, { useState } from "react";
import NavigationBar from "../../../components/NavigationBar.component";
import Jumbotron from "../../../components/Jumbotron.component";
import TableSPV from "../../../components/TableSPV.component";
import ButtonBottomRight from "../../../components/ButtonBottomRight.component";
import { Button, Modal } from "react-bootstrap";

const DashboardSPV = () => {

  return (
    <>
      <NavigationBar />
      <Jumbotron notPlanner={true} />
      <TableSPV />
      <ButtonBottomRight />
    </>
  );
};

export default DashboardSPV;
