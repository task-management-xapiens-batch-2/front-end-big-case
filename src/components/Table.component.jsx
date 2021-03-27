import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
import TableListComponent from "./TableList.component";

const GET_PROJECT_INFO = gql`
  query {
    findTaskSPV {
      id
      title
      description
      start_date
      due_date
    }
  }
`;

const TableComponent = ({ title, status }) => {
  const history = useHistory();

  const { data, loading } = useQuery(GET_PROJECT_INFO);
  if (loading) return <div>Loading...</div>;

  const ListProject = data.findTaskSPV.map(({ id, title }) => {
    return (
      <TableListComponent
        onClick={() => history.push("/detail-project")}
        keyId={id}
        project_name={title}
        status={status}
      />
    );
  });
  return (
    <div>
      <h2>{title}</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Project Name</th>
            <th scope="col">Duration</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {ListProject}
          <tr>
            <th scope="row">2</th>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td>7 days</td>
            <td>{status}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>30 days</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
