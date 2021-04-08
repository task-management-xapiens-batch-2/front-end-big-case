import MaterialTable from "material-table";
import React from "react";
import { connect } from "react-redux";
import { GET_PROJECT_SUPERVISOR } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {BiDetail} from 'react-icons/bi'

const TableTaskList = ({ columnData }) => {
  const history = useHistory();
  const { data, loading, refetch } = useQuery(GET_PROJECT_SUPERVISOR, {
    pollInterval: 100,
  });

  if (loading) return <div>Loading...</div>;

  const plannerData = data.findAllProjectSupervisor.map((o) => ({ ...o }));
  return (
    <MaterialTable
      columns={columnData}
      data={plannerData}
      title="Project List"
      options={{
        headerStyle: {
          backgroundColor: "#0074d9",
          color: "#FFF",
          width: 150,
          minWidth: 150,
          textAlign: "center"
        },
        rowStyle: {
          backgroundColor: "#EEE",
          textAlign: "center",
        },
        cellStyle: {
          width: 150,
          minWidth: 150,
        },
        filtering: true,
        actionsColumnIndex: -1,
        search: false,
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    columnData: state.spv.columnDataTask,
  };
};

export default connect(mapStateToProps, null)(TableTaskList);
