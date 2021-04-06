import React from "react";
import TableSPV from "../../../components/TableUserSPV.component";
import ButtonBottomRight from "../../../components/ButtonBottomRight.component";
import Jumbotron from "../../../components/Jumbotron.component";

const MainMenu = () => {
  return (
    <>
      <Jumbotron
        notPlanner={true}
        description={
          "Welcome to user panel for planner and worker. Here you can create, edit, and delete planner and worker."
        }
      />
      <TableSPV />
      <ButtonBottomRight />
    </>
  );
};

export default MainMenu;
