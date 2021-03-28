import React, { useState } from "react";
import ButtonComponent from "./Button.component";

const TableSupervisorComponent = ({ items }) => {
  console.log(items);
  const [newData, setNewData] = useState([items]);

//   const contentLoop = newData.map(
//     ({
//       id,
//       project_id,
//       assignee,
//       title,
//       description,
//       start_date,
//       due_date,
//       attachment,
//       draft,
//     }) => {
//       return (
//         <>
//           <td key={id}>{id}</td>
//           <td className="text-center">{project_id}</td>
//           <td className="text-center">{title.substring(0,10)}</td>
//           <td className="text-center">Sopan santun</td>
//           <td className="text-center">
//             <ButtonComponent title="View Detail" />
//           </td>
//         </>
//       );
//     }
//   );
  return (
    <>
      {/* <h2>Project List</h2>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">No</th>
            <th scope="col">Id Project</th>
            <th scope="col">Project Name</th>
            <th scope="col">Planner Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>{contentLoop}</tr>
        </tbody>
      </table> */}
    </>
  );
};

export default TableSupervisorComponent;
