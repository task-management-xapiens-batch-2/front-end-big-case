import React from "react";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/client";
import {GET_ALL_PROJECT} from '../graphql/queries'

import ProjectComponent from "../components/Project.component";
// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../components/Jumbotron.component";
import TableComponent from "../components/Table.component";


const Dashboard = () => {
  const history = useHistory();
  const { data, loading } = useQuery(GET_ALL_PROJECT);
  if (loading) return <div>Loading...</div>;

  const getAllProject = data.findTaskSPV.map(
    ({ id, title, description, start_date, due_date }) => {
      return (
        <div key={id}>
          <ProjectComponent
            title={title}
            description={description}
            start_date={start_date}
            due_date={due_date}
          />
        </div>
      );
    }
  );
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
          <div className="col">{getAllProject}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
