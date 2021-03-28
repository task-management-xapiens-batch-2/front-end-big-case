import React from "react";
import ButtonComponent from "../../components/Button.component";

const ProjectConfirmation = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    projectTitle,
    projectDesc,
    taskTitle,
    taskDesc,
    startDate,
    endDate,
    attachment,
    note,
    worker,
  } = formData;

  //   Todo Fix: (Misal tanggal start 28 Maret dan end datenya tanggal 4 maka hasilnya minus)
  let estimation = endDate.slice(8) - startDate.slice(8);
  //   console.log(endDate);
  //   console.log(startDate);
  return (
    <div>
      <h1>Confirm Your Data</h1>
      <div>
        <RenderData
          summary="project"
          style={{ background: "aliceblue" }}
          go={go}
          details={[
            { "Project Title": projectTitle },
            { "Project Description": projectDesc },
          ]}
        />
        <RenderData
          summary="task"
          style={{ background: "#efefef" }}
          go={go}
          details={[
            { "Task Title": taskTitle },
            { "Task Description": taskDesc },
            { "Project Estimation": estimation + " days" },
            { Attachment: attachment },
            { Notes: note },
            { Worker: worker },
          ]}
        />
        <ButtonComponent title="Back" />
        <ButtonComponent title="Save to Draft" />
        <ButtonComponent title="Confirm" onClick={() => go("success")} />
      </div>
    </div>
  );
};

export default ProjectConfirmation;

export const RenderData = ({ summary, go, details }) => (
  <div>
    <div>{summary}</div>
    <div>
      {details.map((data, key) => {
        const obKey = Object.keys(data)[0];
        const val = data[Object.keys(data)[0]];

        return <div key={key}>{`${obKey}: ${val}`}</div>;
      })}
      {/* Todo Fix: Jika Pencet Edit maka akan Error. */}
      <ButtonComponent title="Edit" onClick={() => go(`${summary}`)} />
    </div>
  </div>
);
