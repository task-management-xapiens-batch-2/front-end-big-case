import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";

export const sideNavMenu = (
  <div>
    <Link to="/dashboard/planner">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main Menu" />
      </ListItem>
    </Link>

    <Link to="/dashboard/planner/project-list">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Project" />
      </ListItem>
    </Link>
    <Link to="/task">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Task" />
      </ListItem>
    </Link>
  </div>
);
