import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
import { useInput } from "./components/MainStoreProvider";
import Home from "./components/home/Home";
import { CircularProgress } from "@material-ui/core";

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
      ) : chartData.user ? (
        <Home />
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
