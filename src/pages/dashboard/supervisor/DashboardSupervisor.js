import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_TASK_SUPERVISOR } from "../../../graphql/queries";
import JumbotronComponent from '../../../components/Jumbotron.component'
import ProjectComponent from '../../../components/Project.component';
import TableSupervisorComponent from '../../../components/TableSupervisor.component'

const DashboardSupervisor = () => {
    const { data, loading } = useQuery(GET_TASK_SUPERVISOR);
    if (loading) return <div>Loading...</div>;
  
    console.log(data)
  
    const getAllTaskSPV = data.findTaskSPV.map(
      ({ id, project_id, title, description, start_date, due_date, attachment, draft, notes }) => {
        return (
          <div key={id}>
            <TableSupervisorComponent
                id={id}
                projectId={project_id}
              title={title}
              description={description}
              start_date={start_date}
              due_date={due_date}
              attachment={attachment}
              status={draft}
              notes={notes}
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
                {getAllTaskSPV}
            </div>
        </div>
      </div>
    </div>
    )
}

export default DashboardSupervisor
