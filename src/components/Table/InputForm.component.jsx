import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  inputAdd: {
    marginBottom: theme.spacing(2),
    width: 400,
  },
}));

const InputFormComponent = ({ label, name, ...rest }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.inputAdd}
      variant="outlined"
      name={name}
      label={label}
      {...rest}
    />
  );
};

export default InputFormComponent;
