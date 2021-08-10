import React from 'react';
import { Route, Switch } from "react-router";
import AddRecipe from './components/AddRecipe/AddRecipe';
import SignIn from './components/Signin/Signin';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import SignUp from './components/Signup/Signup';
import HomePage from './components/Homepage';
// import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/recipelist" component={RecipeList} />
        <Route path="/addrecipe" component={AddRecipe} />
        <Route path="/recipedetails/:id" component={RecipeDetails} />
        {/* <Redirect from="/" to="/signup" /> */}
      </Switch>
    </div>
  );
}

export default App;
