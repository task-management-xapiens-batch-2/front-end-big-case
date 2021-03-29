import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/`} />;
        }
      }}
    />

    // <Route
    //   {...rest}
    //   render={(props) => {
    //     if (localStorage.getItem("token") !== "") {
    //       return <Component {...props} />;
    //     } else {
    //       return (
    //         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    //       );
    //     }
    //   }}
    // />
  );
};
