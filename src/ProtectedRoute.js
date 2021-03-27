import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: RouteComponent, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? (
          <RouteComponent {...routeProps} user={user} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default ProtectedRoute;
