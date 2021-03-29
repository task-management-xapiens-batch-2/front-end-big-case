import React, { Fragment, useState } from "react";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  TextField,
  Button,
  Table,
  TableHead,
  TableSortLabel,
  Grid,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ActionButton from "../ActionButton.component";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECT } from "../../graphql/queries";
import Popup from "../Popup.component";

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
  const [isOpen, setIsOpen] = useState(false);

  // const openPopup = item => {
  //   setIsOpen(true)
  // }

  const { data, loading, error } = useQuery(GET_ALL_PROJECT);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Fetching failed...</div>;

  const getAllProject = data.findAllTask.map(
    ({ id, title, description, start_date, due_date }) => {
      return (
        <TableRow key={id}>
          <TableCell>{title}</TableCell>
          <TableCell>{description}</TableCell>
          <TableCell>5 Days</TableCell>
          <TableCell>On Going</TableCell>
          <TableCell>
            <ActionButton color="primary">
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
                <TableSortLabel>Assigned To</TableSortLabel>
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
          {getAllProject}
        </Table>
      </Paper>
      <Popup title="Add a New Project" openPopup={isOpen} setIsOpen={setIsOpen}>
        <form className={classes.root}>
          <Grid container>
            <Grid item xs={6}>
              <TextField name="projectName" label="Project Name" />
              <TextField name="projectDesc" label="Project Description" />
              <TextField name="projectName" label="Project Name" />
              <TextField name="projectName" label="Project Name" />
            </Grid>
            <Grid item xs={6}>
              <ActionButton
                className={classes.button}
                color="primary"
                size="large"
                variant="contained"
              >
                Submit
              </ActionButton>
            </Grid>
          </Grid>
        </form>
      </Popup>
    </Fragment>
  );
};

export default TablePlanComponent;
