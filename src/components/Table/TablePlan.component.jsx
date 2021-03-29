import React, { Fragment, useState } from "react";
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
import { GET_TASK_PLANNER } from "../../graphql/queries";
import { CREATE_TASK, DELETE_TASK } from "../../graphql/mutation";

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
  },
}));

const TablePlanComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");

  const { data, loading, error } = useQuery(GET_TASK_PLANNER);
  const [createTask] = useMutation(CREATE_TASK);
  const [deleteTask] = useMutation(DELETE_TASK);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Fetching failed..</div>;

  const handleEdit = () => {
    setIsOpen(true);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    createTask({ variables: { title, description, startDate, dueDate } });
    setIsOpen(false);
  };

  const getAllProject = data.findAllTaskPlanner.map(
    ({ id, title, start_date, status }) => {
      return (
        <TableRow
          key={id}
          onClick={() => history.push(`/dashboard/planner/project/${id}`)}
        >
          <TableCell>{title}</TableCell>
          <TableCell>{start_date}</TableCell>
          <TableCell>{status ? "Submitted" : status}</TableCell>
          <TableCell>
            <ActionButton onClick={() => handleEdit()} color="primary">
              <EditOutlinedIcon fontSize="small" />
            </ActionButton>
            <ActionButton color="secondary">
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
        <TableFormComponent
          submit={handleCreateProject}
          title={(e) => setTitle(e.target.value)}
          desc={(e) => setDescription(e.target.value)}
        />
      </Popup>
    </Fragment>
  );
};

export default TablePlanComponent;
