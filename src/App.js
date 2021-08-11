import React from 'react';
import { Route } from "react-router";
import AddRecipe from './components/AddRecipe/AddRecipe';
import SignIn from './components/Signin/Signin';
import RecipeList from './components/RecipeList/RecipeList';
import RecipePage from './components/RecipePage/RecipePage';
import SignUp from './components/Signup/Signup';
import HomePage from './components/Homepage/Homepage';
import Demo from './components/Demo/Demo';
// import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}

      <Route exact path="/" component={HomePage} />
      <Route path="/demo" component={Demo} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/recipelist" component={RecipeList} />
      <Route path="/addrecipe" component={AddRecipe} />
      <Route path="/recipepage/:id" component={RecipePage} />
      {/* <Redirect from="/" to="/signup" /> */}

    </div>
  );
}

export default App;
