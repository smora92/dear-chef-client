import React from 'react'
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.jpeg";
import './Homepage.css'

function HomePage() {
    return (
        <div className="homepage-container">
            {/* <img src={logo} className="logo-container" alt="logo" /> */}
            <div className="header-title" > DEAR CHEF </div>
            <Link to="/demo" className="button"> Demo</Link>
            <Link to="/signup" className="button"> Sign Up</Link>

        </div>
    )
}
export default HomePage