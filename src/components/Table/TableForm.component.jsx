import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import InputFormComponent from "./InputForm.component";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
  label: {
    textTransform: "uppercase",
  },
  dateField: {
    marginTop: theme.spacing(2),
  },
  note: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2.6),
  },
}));

const TableFormComponent = ({ submit, title, desc }) => {
  const classes = useStyles();
  console.log(title, desc);
  return (
    <form onSubmit={submit} className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <InputFormComponent
            onChange={title}
            label="Project Name"
            name="projectName"
          />
          <InputFormComponent
            onChange={desc}
            label="Project Description"
            name="projectDesc"
          />
          <InputFormComponent label="Task Title" name="taskTitle" />
          <InputFormComponent label="Task Description" name="taskDesc" />
          <InputFormComponent label="Note" />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Assign Worker</InputLabel>
            <Select label="Assign Worker" variant="outlined">
              <MenuItem value="">None</MenuItem>
            </Select>
            <TextField
              label="Start Date"
              type="date"
              variant="outlined"
              fullWidth
              className={classes.dateField}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
              variant="outlined"
              fullWidth
              className={classes.dateField}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Attachment"
              type="file"
              variant="outlined"
              fullWidth
              className={classes.dateField}
              InputLabelProps={{ shrink: true }}
            />
            <Grid container className={classes.button}>
              <Grid item xs={3}>
                <Button
                  className={classes.label}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  className={classes.label}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Draft
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default TableFormComponent;
