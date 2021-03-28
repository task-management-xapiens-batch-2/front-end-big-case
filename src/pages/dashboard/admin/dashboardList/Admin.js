import { useMutation, useQuery } from "@apollo/client";
import MaterialTable from "material-table";
import React, { useState } from "react";
import { GET_ALL_USER } from "../../../../graphql/queries";

const Admin = () => {
  const [columns, setColumns] = useState([
    { title: "Id", field: "id" },
    { title: "Full Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    { title: "Password", field: "password" },
    { title: "Role", field: "role" },
  ]);

  const { data, loading } = useQuery(GET_ALL_USER);

  if(loading) return <h1>Loading...</h1>

  const rawData = data.user.map((o) => ({ ...o }));

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
                // setNewData([...rawData, newData]);

                resolve();
              }, 200);
            }),
          onRowUpdate: (newNewData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...rawData];
                const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                // setNewData([...dataUpdate]);

                resolve();
              }, 200);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataDelete = [...newData];
                // const index = oldData.tableData.id;
                // dataDelete.splice(index, 1);
                // setNewData([...dataDelete]);
                resolve();
              }, 200);
            }),
        }}
      />
    </div>
  );
};

export default Admin;