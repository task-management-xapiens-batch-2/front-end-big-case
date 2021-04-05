import MaterialTable from "material-table";
import React from "react";
import { connect } from "react-redux";
import {
  DELETE_USER,
  UPDATE_USER,
  GET_USER_FROM_ADMIN,
} from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";

const TableSPV = ({ columnData }) => {
  const { data, loading, refetch } = useQuery(GET_USER_FROM_ADMIN, {
    pollInterval: 100,
  });

  const [updateUser] = useMutation(UPDATE_USER);

  const [deleteUser] = useMutation(DELETE_USER);

  if (loading) return <div>Loading...</div>;

  const plannerData = data.findAllUser.map((o) => ({ ...o }));
  return (
    <MaterialTable
      columns={columnData}
      data={plannerData}
      title="Planner and Worker List"
      options={{
        headerStyle: {
          backgroundColor: "#0074d9",
          color: "#FFF",
        },
        rowStyle: {
          backgroundColor: "#EEE",
        },
        actionsColumnIndex: -1
      }}
        editable={{
        //   onRowUpdate: (newNewData, oldData) =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         const dataUpdate = [...plannerData];
        //         const index = oldData.tableData.id;
        //         dataUpdate[index] = newNewData;
        //         updateUser({ variables: { ...newNewData } });
        //         // refetch();
        //         resolve();
        //       }, 200);
        //     }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                deleteUser({ variables: { id: oldData.id } });
                // refetch();
                resolve();
              }, 200);
            }),
        }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    columnData: state.spv.columnDataUser,
  };
};


export default connect(mapStateToProps, null)(TableSPV);
