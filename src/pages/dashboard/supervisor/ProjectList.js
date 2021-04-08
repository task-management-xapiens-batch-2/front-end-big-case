import Jumbotron from "../../../components/Jumbotron.component";
import TableTaskListSPV from "../../../components/TableTaskList.component";

const ProjectList = () => {
  return (
    <>
     <Jumbotron
        notPlanner={true}
        description={
          "This menu is for all projects that are currently being listed"
        }
      />
      <TableTaskListSPV />
    </>
  );
};

export default ProjectList;
