import React, { useState } from "react";
import { auth, GoogleSignIn } from "../../firebase";
import "./SignIn.css";
import login_pic from "../../images/trading.jpg";
import { CircularProgress, TextField } from "@material-ui/core";
import { useHistory } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();

  const emailSignIn = (event) => {
    event.preventDefault();
    setLoading("signIn");
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/home");
        setLoading("");
      })
      .catch((err) => {
        setLoading("");
        alert("Failed to Sign In : " + err);
      });
  };

  const emailSignUp = (event) => {
    event.preventDefault();
    setLoading("signUp");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/home");
        setLoading("");
      })
      .catch((err) => {
        setLoading("");
        alert("Failed to Sign In : " + err);
      });
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    setLoading("google");
    auth
      .signInWithPopup(GoogleSignIn)
      .then(() => {
        history.push("/home");
        setLoading("");
      })
      .catch((err) => {
        setLoading("");
        alert("Failed to Sign In");
      });
  };

  return (
    <div className="signIn">
      <div className="signIn__imageDiv">
        <img src={login_pic} alt="Trading" />
      </div>
      <div className="signIn__formDiv">
        <form>
          <h5>Welcome to Trading Coach</h5>
          <TextField
            className="signIn__formText"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            className="signIn__formText"
            id="outlined-basic"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading === "signIn" ? (
            <button disabled={true} className="signIn__login signIn__loader">
              <CircularProgress />
            </button>
          ) : (
            <button
              disabled={loading.length > 0}
              onClick={emailSignIn}
              type="submit"
              className="signIn__login"
            >
              Login
            </button>
          )}
          {loading === "signUp" ? (
            <button disabled={true} className="signIn__login signIn__loader">
              <CircularProgress />
            </button>
          ) : (
            <button
              disabled={loading.length > 0}
              onClick={emailSignUp}
              type="submit"
              className="signIn__login"
            >
              Sign Up
            </button>
          )}
          <p style={{ textAlign: "center" }}>OR</p>
          <div>
            {loading === "google" ? (
              <button disabled={true} className="btn__google google__loader">
                <CircularProgress />
              </button>
            ) : (
              <button
                disabled={loading.length > 0}
                onClick={handleGoogleSignIn}
                className="btn__google"
              >
                <img
                  className="app__loginImg"
                  alt="GoogleLogo"
                  src="https://i.ibb.co/qNdyvc7/google.png"
                  width="80px"
                  height="30px"
                />
                <div>Sign In with Google</div>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
