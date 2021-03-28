import React from "react";
import ButtonComponent from "./Button.component";

const TableSupervisorComponent = ({ id, title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">No</th>
            <th scope="col">Project Name</th>
            <th scope="col">Planner Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-center">1</th>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing.</td>
            <td className="text-center">5 days</td>
            <td className="text-center"><ButtonComponent title="View Detail"/></td>
          </tr>
          <tr>
            <th scope="row" className="text-center">2</th>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td className="text-center">7 days</td>
            <td className="text-center"><ButtonComponent title="View Detail"/></td>
          </tr>
          <tr>
            <th scope="row" className="text-center">3</th>
            <td>Lorem ipsum dolor sit amet.</td>
            <td className="text-center">30 days</td>
            <td className="text-center"><ButtonComponent title="View Detail"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSupervisorComponent;
