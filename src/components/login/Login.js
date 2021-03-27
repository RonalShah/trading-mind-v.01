import React from "react";
import "../../App.css";
import Fade from "react-reveal/Fade";
import Logo from "../../images/logo.png";

class Login extends React.Component {
  move = () => {
    this.props.history.push("/Home");
  };
  render() {
    return (
      <div className="login">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <img style={{ marginLeft: "-2%" }} src={Logo} width="300px" />
          </div>
        </nav>
        <Fade bottom cascade>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="center">
              <form>
                <h1 className="head">Login</h1>
                <div style={{ marginTop: "25%" }} className="group">
                  <input className="inp" type="email" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label className="lab">Email</label>
                </div>
                <div className="group">
                  <input className="inp" type="password" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label className="lab">Password</label>
                </div>

                <div className="buttbox">
                  <button onClick={this.move} className="buttsign">
                    Login
                  </button>
                </div>

                <p style={{ textAlign: "center", color: "white" }}>
                  Don't have an account?{" "}
                  <button className="buttlogin">Sign Up</button>
                </p>

                <div className="buttbox">
                  <button onClick={this.move} className="googlebutt">
                    <img
                      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                      width="22px"
                      height="22px"
                    />
                    Sign In with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Login;
