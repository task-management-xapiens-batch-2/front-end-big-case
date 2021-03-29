import React from "react";
import ButtonComponent from "../../../../components/Button.component";

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

  //  Done Fixing: (Misal tanggal start 28 Maret dan end datenya tanggal 4 maka hasilnya minus)
  let newstartDate = new Date(startDate.toString());
  let newEndDate = new Date(endDate.toString());

  let estimation = newEndDate - newstartDate;
  let difDays = estimation / (1000 * 3600 * 24);
  return (
    <div>
      <h1>Confirm Your Data</h1>
      <div>
        <RenderData
          summary="project"
          go={go}
          details={[
            { "Project Title": projectTitle },
            { "Project Description": projectDesc },
          ]}
        />
        <RenderData
          summary="task"
          go={go}
          details={[
            { "Task Title": taskTitle },
            { "Task Description": taskDesc },
            {
              "Project Estimation": difDays + " days",
            },
            { Attachment: attachment },
            { Notes: note },
            { Worker: worker },
          ]}
        />
        <ButtonComponent title="Back" onClick={() => go("task")} />
        <ButtonComponent title="Save to Draft" />
        <ButtonComponent title="Confirm" onClick={() => go("success")} />
      </div>
    </div>
  );
};

export default ProjectConfirmation;

export const RenderData = ({ summary, go, details }) => (
  <div>
    <div>
      {details.map((data, key) => {
        const obKey = Object.keys(data)[0];
        const val = data[Object.keys(data)[0]];

        return <div key={key}>{`${obKey}: ${val}`}</div>;
      })}
      <ButtonComponent
        title={`Edit ${summary}`}
        onClick={() => go(`${summary}`)}
      />
    </div>
  </div>
);
