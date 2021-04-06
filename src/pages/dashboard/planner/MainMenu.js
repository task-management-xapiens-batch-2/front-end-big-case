import { useState } from "react";

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ProjectPlanner from "./ProjectPlanner";
import { secondaryNavMenu, sideNavMenu } from "./SideNavbar";
import { useHistory } from "react-router";
import {useStyles} from './Style'
import { Container } from "@material-ui/core";
import { connect } from "react-redux";


const Homepage = ({fullname}) => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{sideNavMenu}</List>
        <Divider />
        <List>{secondaryNavMenu}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Jumbotron */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <h1>Welcome {fullname}!</h1>
                <p>Welcome to planner configuration. Here you can create a new project and submit it to supervisor.</p>
              </Paper>
            </Grid>
            {/* Recent Project */}
            <Grid item xs={12}>
              <ProjectPlanner />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fullname: state.login.fullname,
  }
}
 
export default connect(mapStateToProps, null)(Homepage);