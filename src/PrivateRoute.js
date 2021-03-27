import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? <Redirect to={"/home"} /> : <RouteComponent {...routeProps} />
      }
    />
  );
};

export default PrivateRoute;
