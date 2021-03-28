// import React, { useState } from "react";
// import { Table } from "react-bootstrap";
// import ButtonComponent from "./Button.component";

// const TableSupervisorComponent = ({ items }) => {
//     const getAllTaskSPV = items.map(
//         ({
//           id,
//           project_id,
//           assignee,
//           title,
//           description,
//           start_date,
//           due_date,
//           attachment,
//           draft,
//         }) => {
//           return (
//             <tr className="text-center">
//               <td>{id}</td>
//               <td>{project_id}</td>
//               <td>{title.substring(0, 10)}</td>
//               <td>Andy</td>
//               <td>
//                 <ButtonComponent title="View Detail" onClick={() => {
//                     history.push('/dashboard/supervisor/detail-project')
//                 }}/>
//               </td>
//             </tr>
//           );
//         }
//       );
//   return (
//     <>
//             <h2>Project List</h2>
//       <Table responsive>
//     <thead>
//       <tr className="text-center">
//         <th>No</th>
//         <th>Project ID</th>
//         <th>Project Title</th>
//         <th>Planner Name</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//       {getAllTaskSPV}
//     </tbody>
//   </Table>
//     </>
//   );
// };

// export default TableSupervisorComponent;
