import React from 'react'
import backArrow from '../../assets/images/back-arrow.png'
import { useHistory } from "react-router-dom";
import './Demo.css'

export default function Demo() {
    const history = useHistory();
    return (
        <>
            <div className="demo-container">

                <img
                    src={backArrow}
                    className="back-arrow"
                    alt="back arrow"
                    onClick={() => history.goBack()}
                />
            </div>
            <div className="med-mar" ><h1>How it works</h1>
                <p>Click the signup link. Create a username and password. Click 'sign up' button and you'll sign in.
                    You'll then be redirected to the recipelist. You can search for a recipe on the search bar,
                    click on any recipe to go the recipe details. You can also add a recipe by clicking the
                    '+' button on the nav bar. On the recipe page you'll view the recipe details, view comments or
                    add a comment.
                </p></div>
        </>
    )
}
