import React from "react";
import InputComponent from "./Input.component";

const TablePlannerComponent = ({ title, status, search }) => {
  return (
    <div>
      <h2>{title}</h2>
      {search ? <InputComponent placeholder={search} /> : null}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Project Name</th>
            <th scope="col">Duration</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing.</td>
            <td>5 days</td>
            <td>{status}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td>7 days</td>
            <td>{status}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>30 days</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePlannerComponent;
