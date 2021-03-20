import React, { useState } from 'react';
import { auth, GoogleSignIn } from '../../firebase';
import "./SignIn.css";
import login_pic from '../../images/LoginPage.svg';



function SignIn() {

    const [email, setEmail] = useState("Enter Email")
    const [password, setPassword] = useState("Password")



    const emailSignIn = event => {
        event.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => console.log(auth.value))
            .catch((err) => alert("Failed to Sign In : " + err));
    };


    const emailSignUp = event => {
        event.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => alert(auth.value))
            .catch((err) => alert("Failed to Sign In : " + err));
    }

    const handleGoogleSignIn = () => {
        auth
            .signInWithPopup(GoogleSignIn)
            .catch((err) => alert("Failed to Sign In"));
    };





    return (
        <div className="Login">

            <img
                className="loginImg"
                src={login_pic} alt="LogIn" />

            {/* Email Sign In Form */}
            <form className="form__Login">
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
                <button
                    onClick={emailSignIn}
                    className="btn__login">
                    Login
                    </button>
                <button
                    onClick={emailSignUp}
                    className="btn__login"
                >
                    New? Sign Up!
                    </button>
            </form>

            <div>
                <button onClick={handleGoogleSignIn}
                    className="btn__google">
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
        </div>


    )

}

export default SignIn
