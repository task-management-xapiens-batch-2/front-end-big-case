import { Checkbox, Paper, Typography } from "@material-ui/core";
import React from "react";
// import { useHistory } from "react-router";

const TaskComponent = ({ title, desc }) => {
  // const history = useHistory();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Paper
      // onClick={() => history.push("/dashboard/planner/detail-project")}
      style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 10 }}
      className="row mb-3"
    >
      <div className="col-md-1">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>
      <div className="col-md-11">
        <Typography variant="h6" component="h3" noWrap>
          {title}
        </Typography>
        <p>{desc}</p>
      </div>
    </Paper>
  );
};

export default TaskComponent;
