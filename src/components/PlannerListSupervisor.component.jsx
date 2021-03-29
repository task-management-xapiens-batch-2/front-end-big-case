import React, { useState } from "react";
import MaterialTable from "material-table";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USER, CREATE_USER } from "../graphql/queries";

const PlannerListSupervisor = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Planner Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    { title: "Password", field: "password" },
    { title: "Role", field: "role", lookup: { planner: "Planner" } },
  ]);

  const [newData, setNewData] = useState([]);

  console.log(newData);

  const { loading, refetch } = useQuery(GET_ALL_USER, {
    onCompleted: ({ user }) => {
      console.log(user);
      return setNewData(user);
    },
  });

  const [createUser] = useMutation(CREATE_USER);

  if (loading) return <h1>Loading...</h1>;

  const rawData = newData.map((o) => ({ ...o }));

  console.log(rawData);

  const plannerList = (
    <MaterialTable
      columns={columns}
      data={rawData}
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
      editable={{
        onRowAdd: (newNewData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setNewData([...newData, newNewData]);
              console.log(newNewData);
              createUser({ variables: { input: newNewData } });
              refetch();
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

  return plannerList;
};

export default PlannerListSupervisor;
