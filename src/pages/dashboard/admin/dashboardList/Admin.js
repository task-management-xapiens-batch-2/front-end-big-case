import { useMutation, useQuery } from "@apollo/client";
import MaterialTable from "material-table";
import React, { useState } from "react";
import { CREATE_USER, DELETE_USER, GET_USER_FROM_ADMIN, UPDATE_USER } from "../../../../graphql/queries";

const Admin = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Full Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    { title: "Password", field: "password" },
    { title: "Role", field: "role", lookup: {supervisor: "supervisor", planner: "planner", worker: "worker"} },
  ]);

  const [newData, setNewData] = useState([]);

  console.log(newData)

  const { loading, refetch } = useQuery(GET_USER_FROM_ADMIN, {
    onCompleted: ({ findAllUserAdmin}) => {
      console.log(findAllUserAdmin);
      return setNewData(findAllUserAdmin);
    },
    pollInterval: 1000
  });

  const [createUser] = useMutation(CREATE_USER);

  const [updateUser] = useMutation(UPDATE_USER);

  const [deleteUser] = useMutation(DELETE_USER);
 
  if(loading) return <h1>Loading...</h1>

  const rawData = newData.map((o) => ({ ...o }));

  console.log(rawData)

  // const rawData = data.user.map((o) => ({ ...o }));

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns}
        data={rawData}
        title="Admin User Panel"
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
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
                createUser({
                  variables: {
                    ...newNewData,
                    // email: "eren@gmail.com",
                    // fullname: "eren",
                    // password: "eren",
                    // role: "supervisor",
                    // username: "erenjaeger"
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
                updateUser({ variables: {...newNewData}})
                refetch()
                resolve();
              }, 200);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                deleteUser({variables: {id: oldData.id}})
                refetch()
                resolve();
              }, 200);
            }),
        }}
      />
    </div>
  );
};

export default Admin;
