import React, { useState } from "react";
import MaterialTable from "material-table";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER, DELETE_USER, GET_ALL_USER, UPDATE_USER } from "../graphql/queries";

const WorkerListPlanner = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Worker Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    { title: "Password", field: "password" },
    { title: "Role", field: "role", lookup: {worker: "Worker"} },
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

  const [updateUser] = useMutation(UPDATE_USER);

  const [deleteUser] = useMutation(DELETE_USER);

  if (loading) return <h1>Loading...</h1>;

  const rawData = newData.map((o) => ({ ...o }));

  const plannerList = (
    <MaterialTable
      columns={columns}
      data={rawData}
      title="Worker List"
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
              resolve();
            }, 200);
          }),
        onRowUpdate: (newNewData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...newData];
              const index = oldData.tableData.id;
              dataUpdate[index] = newNewData;
              setNewData([...dataUpdate]);
              updateUser({ variables: { input: dataUpdate } });
              resolve();
            }, 200);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...rawData];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setNewData([...dataDelete]);
              deleteUser({ variables: { input: dataDelete } });
              resolve();
            }, 200);
          }),
      }}
    />
  );

  return plannerList;
};

export default WorkerListPlanner;
