import MaterialTable from "material-table";
import React from "react";
import { connect } from "react-redux";

const TableSPV = ({columnData}) => {

//   const [newData, setNewData] = useState([]);

//   const { loading, refetch } = useQuery(GET_USER_FROM_ADMIN, {
//     onCompleted: ({ findAllUserAdmin }) => {
//       console.log(findAllUserAdmin);
//       return setNewData(findAllUserAdmin);
//     },
//     pollInterval: 1000,
//   });

//   const [createUser] = useMutation(CREATE_USER);

//   const [updateUser] = useMutation(UPDATE_USER);

//   const [deleteUser] = useMutation(DELETE_USER);

//   if (loading) return <div>Loading...</div>;

//   const plannerData = newData.map((o) => ({ ...o }));
  return (
    <MaterialTable
      columns={columnData}
    //   data={plannerData}
      title="Planner and Worker List"
      options={{
        headerStyle: {
          backgroundColor: "#0074d9",
          color: "#FFF",
        },
        rowStyle: {
          backgroundColor: "#EEE",
        },
      }}
    //   editable={{
    //     onRowAdd: (newNewData) =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           createUser({
    //             variables: {
    //               ...newNewData,
    //             },
    //           });
    //           refetch();
    //           resolve();
    //         }, 200);
    //       }),
    //     // TODOS: Update belum bisa. Coba tanya backend
    //     onRowUpdate: (newNewData, oldData) =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           const dataUpdate = [...newData];
    //           const index = oldData.tableData.id;
    //           dataUpdate[index] = newNewData;
    //           updateUser({ variables: { ...newNewData } });
    //           refetch();
    //           resolve();
    //         }, 200);
    //       }),
    //     onRowDelete: (oldData) =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           deleteUser({ variables: { id: oldData.id } });
    //           refetch();
    //           resolve();
    //         }, 200);
    //       }),
    //   }}
    />
  );
};

const mapStateToProps = state => {
    return {
        columnData: state.spv
    }
}

export default connect(mapStateToProps,null)(TableSPV);
