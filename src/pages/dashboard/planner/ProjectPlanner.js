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
  
  const ProjectPlanner = () => {
    const classes = useStyles();
    const history = useHistory();
    const { data, loading, error } = useQuery(GET_PROJECT_PLANNER);
    if (loading) return <LinearProgress />;
    
    if (error) return <div>Error...</div>;
    return (
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h3">
            Recent Project
          </Typography>
          <Table>
            <TableHead>
              <TableCell>ID</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Edit</TableCell>
            </TableHead>
            {data
              ? data.findAllProjectPlanner.map((d) => {
                  return (
                    <TableBody key={d.id}>
                      <TableCell>{d.id}</TableCell>
                      <TableCell>{d.title}</TableCell>
                      <TableCell>{d.description}</TableCell>
                      <TableCell>{d.status}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginRight: 10 }}
                          //   onClick={() => history.push(`/detail-project/${d.id}`)}
                        >
                          View
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          //   onClick={() => deleteProject({ variables: { id: d.id } })}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableBody>
                  );
                })
              : null}
          </Table>
        </Paper>
      );
  };
  
export default ProjectPlanner