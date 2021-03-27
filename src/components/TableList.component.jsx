import React from "react";

const TableListComponent = ({ keyId, project_name, status, ...rest }) => {
  return (
    <tr style={{ cursor: "pointer" }} key={keyId} {...rest}>
      <th scope="row">1</th>
      <td>{project_name}</td>
      <td>5 days</td>
      <td>{status}</td>
    </tr>
  );
};

export default TableListComponent;
