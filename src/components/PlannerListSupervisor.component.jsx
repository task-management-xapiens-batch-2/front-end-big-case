import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER_FROM_ADMIN,
} from "../graphql/queries";

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

  const { loading, refetch } = useQuery(GET_USER_FROM_ADMIN, {
    onCompleted: ({ findAllUserAdmin }) => {
      console.log(findAllUserAdmin);
      return setNewData(findAllUserAdmin);
    },
  });

  const [createUser] = useMutation(CREATE_USER);

  const [updateUser] = useMutation(UPDATE_USER);

  const [deleteUser] = useMutation(DELETE_USER);

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
              createUser({
                variables: {
                  ...newNewData,
                },
              });
              refetch();
              resolve();
            }, 200);
          }),
        // TODOS: Update belum bisa. Coba tanya backend
        onRowUpdate: (newNewData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...newData];
              const index = oldData.tableData.id;
              dataUpdate[index] = newNewData;
              updateUser({ variables: { ...newNewData } });
              refetch();
              resolve();
            }, 200);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteUser({ variables: { id: oldData.id } });
              refetch();
              resolve();
            }, 200);
          }),
      }}
    />
  );

  return plannerList;
};

export default PlannerListSupervisor;
