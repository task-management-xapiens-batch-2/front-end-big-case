import React, { useState } from "react";
import MaterialTable from "material-table";
import { useQuery } from "@apollo/client";
import { GET_USER_FROM_ADMIN} from "../graphql/queries";

const WorkerListSupervisor = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Worker Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    { title: "Password", field: "password" },
    { title: "Role", field: "role", lookup: {worker: "Worker"} },
  ]);

  const { data, loading } = useQuery(GET_USER_FROM_ADMIN);

  console.log(data)

  if (loading) return <div>Loading...</div>;

  const plannerData = data.user.map((o) => ({ ...o }));

  const plannerList = (
    <MaterialTable
      columns={columns}
      data={plannerData}
      title="Worker List"
      options={{
        headerStyle: {
          backgroundColor: "#0074d9",
          color: "#FFF",
        },
        rowStyle: {
          backgroundColor: "#EEE",
        }
      }}
      editable={{
        onRowAdd: (newNewData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 200);
          }),
        onRowUpdate: (newNewData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 200);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 200);
          }),
      }}
    />
  );

  return plannerList
};

export default WorkerListSupervisor;
