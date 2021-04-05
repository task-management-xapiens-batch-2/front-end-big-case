import MaterialTable from "material-table";
import React from "react";
import { connect } from "react-redux";
import {
  GET_PROJECT_SUPERVISOR,
} from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Button } from "react-bootstrap";

const TableSPV = ({ columnData }) => {
  const { data, loading, refetch } = useQuery(GET_PROJECT_SUPERVISOR, {
    pollInterval: 100,
  });

  if (loading) return <div>Loading...</div>;

  const plannerData = data.findAllProjectSupervisor.map((o) => ({ ...o}));
  return (
    <MaterialTable
      columns={columnData}
      data={plannerData}
      title="Project List"
      actions={[
        {
          // onClick: () => history.push("/dashboard/supervisor/detail-project"),
          onClick: (event, rowData) => {
            console.log(rowData)
            // const newData = {};
            // <DetailProject detailData={newData}/>
            // history.push("/dashboard/supervisor/detail-project")
          }
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
        actionsColumnIndex: -1
      }}
      components={{
        Action: (props) => (
          <Button
            onClick={(event) => props.action.onClick(event, props.data)}
            variant="secondary"
            style={{ textTransform: "none" }}
            className="py-2 my-2 px-3"
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
