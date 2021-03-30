import React, { Fragment, useEffect, useState } from "react";
import {
  Paper,
  makeStyles,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  TextField,
  Button,
  Table,
  TableHead,
  TableSortLabel,
  TableBody,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ActionButton from "../ActionButton.component";
import { useMutation, useQuery } from "@apollo/client";
import Popup from "../Popup.component";
import TableFormComponent from "./TableForm.component";
import { useHistory } from "react-router";
import { GET_ALL_PROJECT, GET_TASK_PLANNER } from "../../graphql/queries";
import {
  CREATE_PROJECT,
  CREATE_TASK,
  DELETE_PROJECT,
  DELETE_TASK,
} from "../../graphql/mutation";
import InputFormComponent from "./InputForm.component";

const useStyles = makeStyles((theme) => ({
  tableContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  button: {
    position: "absolute",
    right: "10px",
  },
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: "333996",
      backgroundColor: "#3c44b126",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
  root: {
    "& .MuiPaper-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
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
  buttonPop: {
    marginTop: theme.spacing(2.6),
  },
}));

const TablePlanComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const [newProject, setNewProject] = useState({});

  const { data, loading, error, refetch } = useQuery(GET_ALL_PROJECT);
  const [createProject] = useMutation(CREATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Fetching failed..</div>;

  const handleEdit = () => {
    setIsOpen(true);
  };

  const handleChangeProject = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmitProject = (e) => {
    createProject({
      variables: {
        ...newProject,
      },
    });
    e.preventDefault();
  };

  const getAllProject = data.findAllproject.map(
    ({ id, title, description }) => {
      return (
        <TableRow key={id}>
          <TableCell
            onClick={() => history.push(`/dashboard/planner/project/${id}`)}
          >
            {title}
          </TableCell>
          <TableCell>{description}</TableCell>
          <TableCell>aiwheroi</TableCell>
          {/* <TableCell>{status ? "Submitted" : status}</TableCell> */}
          <TableCell>
            <ActionButton onClick={() => handleEdit()} color="primary">
              <EditOutlinedIcon fontSize="small" />
            </ActionButton>
            <ActionButton
              onClick={() => {
                deleteProject({ variables: { id: id } });
                refetch();
              }}
              color="secondary"
            >
              <CloseIcon fontSize="small" />
            </ActionButton>
          </TableCell>
        </TableRow>
      );
    }
  );
  return (
    <Fragment>
      <Paper className={classes.tableContent}>
        <Toolbar>
          <TextField
            label="Search Project"
            className={classes.searchInput}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            className={classes.button}
            color="primary"
            size="large"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add Project
          </Button>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>Project Name</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Duration</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Status</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Edit</TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{getAllProject}</TableBody>
        </Table>
      </Paper>
      <Popup title="Add a New Project" openPopup={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmitProject} className={classes.root}>
          <Grid container>
            <Grid item xs={6}>
              <InputFormComponent
                onChange={handleChangeProject}
                label="Project Name"
                name="projectName"
              />
              <InputFormComponent
                onChange={handleChangeProject}
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
                <Grid container className={classes.buttonPop}>
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
      </Popup>
    </Fragment>
  );
};

export default TablePlanComponent;
