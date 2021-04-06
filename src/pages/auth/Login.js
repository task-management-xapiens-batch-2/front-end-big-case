import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlConfigs } from "../../configs/urlConfigs";

const formValidationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "Password atleast 8 characters")
    .required("Enter your * password, canda password"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={formValidationSchema}
          onSubmit={async ({ email, password }) =>
            await axios
              .post(`${urlConfigs.auth}`, { email, password })
              .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("fullname", res.data.data.fullname);
                localStorage.setItem("username", res.data.data.username);
                localStorage.setItem("email", res.data.data.email);
                localStorage.setItem("role", res.data.data.role);
                history.push("/app");
              })
              .catch((err) => alert(err))
          }
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
            } = props;

            return (
              <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                  value={values.email}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                {errors.email && touched.email && (
                  <div className="error__message">{errors.email}</div>
                )}
                <TextField
                  value={values.password}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {errors.password && touched.password && (
                  <div className="error__message">{errors.password}</div>
                )}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};

export default LoginPage;
