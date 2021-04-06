import MaterialTable from "material-table";
import React from "react";
import { connect } from "react-redux";
import { GET_PROJECT_SUPERVISOR } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      components={{
        Action: props => (
          <Button
            onClick={(event) => props.action.onClick(event, props.data)}
            variant="primary"
            className="mx-auto"
            style={{textTransform: 'none'}}
            size="small"
          >
            View Detail
          </Button>
        ),
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
