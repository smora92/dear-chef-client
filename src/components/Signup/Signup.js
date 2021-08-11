import React from "react";
import "./Signup.css";
// import logo from "../../assets/images/logo.jpeg";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const history = useHistory();

    const handleSignUp = () => {
        history.replace('/signin');
    }

    return (
        <div className="signup-container">
            {/* <img src={logo} className="logo-container" alt="logo" /> */}
            <div className="header-title" > DEAR CHEF </div>
            <input className="user-input med-top-mar" placeholder="Username" aria-required="true" required />
            <input type="password" className="user-input med-top-mar" placeholder="Password" aria-required="true" required />
            <input type="password" className="user-input med-top-mar" placeholder="Confirm Password" aria-required="true" required />
            <button className="button" onClick={handleSignUp} > Sign Up </button>
        </div>
    );
};

export default SignUp;