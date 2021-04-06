import { useQuery } from "@apollo/client";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  LinearProgress,
  Button,
  withStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GET_PROJECT_PLANNER } from "../../../graphql/queries";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ProjectPlanner = () => {
  const classes = useStyles();
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_PROJECT_PLANNER, {
    pollInterval: 100,
  });
  if (loading) return <LinearProgress />;

  if (error) return <div>Error...</div>;

  const getAllProjectPlanner = data.findAllProjectPlanner.map((item, key) => {
    console.log(item);
    return (
      <TableBody key={key}>
        <TableCell className="text-center">{item.id}</TableCell>
        <TableCell className="text-center">{item.title}</TableCell>
        <TableCell className="text-center">{item.description}</TableCell>
        <TableCell
          className={`${
            item.status === "submit"
              ? "bg-warning text-white"
              : item.status === "approve"
              ? "bg-success text-white"
              : "bg-danger text-white"
          } text-center text-capitalize`}
        >
          {item.status}
        </TableCell>
        <TableCell className="d-flex justify-content-center align-content-center">
          <Button
            variant="outlined"
            color="primary"
            // style={{ marginRight: 20 }}
            //   onClick={() => history.push(`/detail-project/${d.id}`)}
          >
            Add New Task
          </Button>
        </TableCell>
      </TableBody>
    );
  });
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" component="h3">
        Recent Project
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <StyledTableCell className="text-center">ID</StyledTableCell>
          <StyledTableCell className="text-center">Project Name</StyledTableCell>
          <StyledTableCell className="text-center">Description</StyledTableCell>
          <StyledTableCell className="text-center">Status</StyledTableCell>
          <StyledTableCell className="text-center">Action</StyledTableCell>
        </TableHead>
        {getAllProjectPlanner}
      </Table>
    </Paper>
  );
};

export default ProjectPlanner;
