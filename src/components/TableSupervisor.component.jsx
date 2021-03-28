import React, { useState } from "react";
import MaterialTable from "material-table";

const TableSupervisor = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Project ID", field: "name" },
    { title: "Project Title", field: "address" },
    { title: "Planner Name", field: "phoneNumber" },
    { title: "Action", field: "job" },
  ]);

  const [newData, setNewData] = useState([]);

  const rawData = newData.map((o) => ({ ...o }));

  console.log(newData);

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns}
        data={rawData}
        title="Task Xapiens Day-019"
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

                resolve();
              }, 200);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...newData];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setNewData([...dataDelete]);
                resolve();
              }, 200);
            }),
        }}
      />
    </div>
  );
};

export default TableSupervisor;
