import React, { useState } from "react";
import MaterialTable from "material-table";
import { useQuery } from "@apollo/client";
import { GET_USER} from "../graphql/queries";

const PlannerListSupervisor = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Planner Name", field: "fullname" },
    {
      title: "Role",
      field: "role",
      lookup: { admin: "Admin", supervisor: "Supervisor", planner: "Planner", worker: "Worker" }
    },
  ]);

  const { data, loading } = useQuery(GET_USER);

  console.log(data)

  if (loading) return <div>Loading...</div>;

  const plannerData = data.user.map((o) => ({ ...o }));

  const plannerList = (
    <MaterialTable
      columns={columns}
      data={plannerData}
      title="Planner List"
      options={{
        headerStyle: {
          backgroundColor: "#0074d9",
          color: "#FFF",
        },
        rowStyle: {
          backgroundColor: "#EEE",
        },
      }}
    />
  );

  return plannerList
};

export default PlannerListSupervisor;
