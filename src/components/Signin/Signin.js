import React from "react";
import './Signin.css'
// import logo from "../../assets/images/logo.jpeg";
import { useHistory } from "react-router-dom";

const SignIn = () => {

    const history = useHistory();

    /** Navigation upon successful login */
    const handleSignIn = () => {
        history.replace("/recipelist");
    };

    return (
        <div className="signup-container">
            {/* <img src={logo} className="logo-container" alt="logo" /> */}
            <div className="header-title" > DEAR CHEF </div>
            <input className="user-input med-top-mar" placeholder="Username" />
            <input
                type="password"
                className="user-input med-top-mar"
                placeholder="Password"
            />
            <button className="button" onClick={handleSignIn}>
                Sign In
            </button>
        </div>
    );
};

export default SignIn;