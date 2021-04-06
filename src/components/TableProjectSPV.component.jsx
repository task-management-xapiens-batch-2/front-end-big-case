import MaterialTable from "material-table";
import React from "react";
import { connect } from "react-redux";
import { GET_PROJECT_SUPERVISOR } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

const TableSPV = ({ columnData }) => {
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
      title="Need Review First Project List"
      actions={[
        {
          icon: "view_column",
          tooltip: "View Detail",
          onClick: (event, rowData) =>
            history.push({
              pathname: `/dashboard/supervisor/project-detail/${rowData.id}`,
            }),
        },
      ]}
      options={{
        headerStyle: {
          backgroundColor: "#0074d9",
          color: "#FFF",
        },
        rowStyle: {
          backgroundColor: "#EEE",
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
    columnData: state.spv.columnDataProject,
  };
};

export default connect(mapStateToProps, null)(TableSPV);
