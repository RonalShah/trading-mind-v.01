import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
import { useInput } from "./components/MainStoreProvider";
import Home from "./components/home/Home";
import { CircularProgress } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const { chartData, dispatch } = useInput();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        setLoading(false);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="App__loader">
          <CircularProgress />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <PrivateRoute
              exact={true}
              path="/login"
              component={SignIn}
              user={chartData.user}
            />
            <ProtectedRoute
              user={chartData.user}
              exact={true}
              path="/dashboard"
              component={Dashboard}
            />
            <ProtectedRoute
              user={chartData.user}
              exact={true}
              path="/home"
              component={Home}
            />
          </Switch>
        </Router>
      )}
      {/* {loading ? (
        <div className="App__loader">
          <CircularProgress />
        </div>
      ) : chartData.user ? (
        <Home />
      ) : (
        <SignIn />
      )} */}
    </div>
  );
}

export default App;
