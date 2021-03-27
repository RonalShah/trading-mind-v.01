import React, { useState } from "react";
import { auth, GoogleSignIn } from "../../firebase";
import "./SignIn.css";
import login_pic from "../../images/trading.jpg";
import { TextField } from "@material-ui/core";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailSignIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log(auth.value))
      .catch((err) => alert("Failed to Sign In : " + err));
  };

  const emailSignUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => console.log(auth.value))
      .catch((err) => alert("Failed to Sign In : " + err));
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(GoogleSignIn)
      .catch((err) => alert("Failed to Sign In"));
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
          <button onClick={emailSignIn} type="submit" className="signIn__login">
            Login
          </button>
          <button onClick={emailSignUp} type="submit" className="signIn__login">
            Sign Up
          </button>
          <p style={{ textAlign: "center" }}>OR</p>
          <div>
            <button onClick={handleGoogleSignIn} className="btn__google">
              <img
                className="app__loginImg"
                alt="GoogleLogo"
                src="https://i.ibb.co/qNdyvc7/google.png"
                width="80px"
                height="30px"
              />
              <div>Sign In with Google</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

{
  /* <form className="form__Login">
<input
  name="email"
  type="email"
  className="login__input"
  id="email"
  placeholder="enter email address"
  onChange={(e) => setEmail(e.target.value)}
  value={email}
/>
<input
  name="password"
  type="password"
  className="login__input "
  id="password"
  placeholder="enter password"
  onChange={(e) => setPassword(e.target.value)}
  value={password}
/>
<button onClick={emailSignIn} className="btn__login">
  Login
</button>
<button onClick={emailSignUp} className="btn__login">
  New? Sign Up!
</button>
</form>

<div>
<button onClick={handleGoogleSignIn} className="btn__google">
  <img
    className="app__loginImg"
    alt="GoogleLogo"
    src="https://i.ibb.co/qNdyvc7/google.png"
    width="80px"
    height="30px"
  />
  <div>Sign In with Google</div>
</button>
</div> */
}
