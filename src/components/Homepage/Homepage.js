import React from 'react'
import { Link } from "react-router-dom";
import './Homepage.css'

function HomePage() {
    return (
        <div className="home-page">
            <Link to="/demo"> Demo</Link>
            <Link to="/signup"> Sign Up</Link>

        </div>
    )
}
export default HomePage