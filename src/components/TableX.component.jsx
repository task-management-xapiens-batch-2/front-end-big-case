import React, { useState } from "react";
import MaterialTable from "material-table";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_PROJECT } from "../graphql/queries";
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
} from "../graphql/mutation";

const PlannerTaskList = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Planner Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    { title: "Password", field: "password" },
    { title: "Role", field: "role", lookup: { planner: "Planner" } },
  ]);

  const { loading, refetch, error } = useQuery(GET_ALL_PROJECT, {
    onCompleted: ({ project }) => {
      console.log(project);
      return setNewData(project);
    },
  });

  const [newData, setNewData] = useState([]);

  console.log(newData);

  const [createProject] = useMutation(CREATE_PROJECT);

  const [updateProject] = useMutation(UPDATE_PROJECT);

  const [deleteProject] = useMutation(DELETE_PROJECT);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

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
              createProject({ variables: { input: newNewData } });
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
              updateProject({ variables: { input: dataUpdate } });
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
              deleteProject({ variables: { input: dataDelete } });
              resolve();
            }, 200);
          }),
      }}
    />
  );

  return plannerList;
};

export default PlannerTaskList;
