import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_ALL_PROJECT } from "../../../graphql/queries";
import JumbotronComponent from '../../../components/Jumbotron.component'
import ProjectComponent from '../../../components/Project.component';
import TableSupervisorComponent from '../../../components/TableSupervisor.component'

const DashboardSupervisor = () => {
    const { data, loading } = useQuery(GET_ALL_PROJECT);
    if (loading) return <div>Loading...</div>;
  
    console.log(data)
  
    const getAllProject = data.findAllTask.map(
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
                <TableSupervisorComponent />
            </div>
          <div className="col">{getAllProject}</div>
        </div>
      </div>
    </div>
    )
}

export default DashboardSupervisor
