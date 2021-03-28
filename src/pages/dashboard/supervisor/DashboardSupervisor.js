import { useQuery } from "@apollo/client";
import React from "react";
import { GET_TASK_SUPERVISOR } from "../../../graphql/queries";
import JumbotronComponent from "../../../components/Jumbotron.component";
import TableSupervisorComponent from "../../../components/TableSupervisor.component";
import { Table } from "react-bootstrap";
import ButtonComponent from "../../../components/Button.component";
import { useHistory } from "react-router";

const DashboardSupervisor = () => {
    const history = useHistory()
  const { data, loading } = useQuery(GET_TASK_SUPERVISOR);
  if (loading) return <div>Loading...</div>;

  console.log(data);

  const getAllTaskSPV = data.findTaskSPV.map(
    ({
      id,
      project_id,
      assignee,
      title,
      description,
      start_date,
      due_date,
      attachment,
      draft,
    }) => {
      return (
        <tr className="text-center">
          <td>{id}</td>
          <td>{project_id}</td>
          <td>{title.substring(0, 10)}</td>
          <td>Andy</td>
          <td>
            <ButtonComponent title="View Detail" onClick={() => {
                history.push('/dashboard/supervisor/detail-project')
            }}/>
          </td>
        </tr>
      );
    }
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <h2>Project List</h2>
            <Table responsive>
              <thead>
                <tr className="text-center">
                  <th>No</th>
                  <th>Project ID</th>
                  <th>Project Title</th>
                  <th>Planner Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getAllTaskSPV}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupervisor;
