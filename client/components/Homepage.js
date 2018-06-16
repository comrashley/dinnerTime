import React, {Component} from 'react'

// import {Navbar} from './components'
// import Routes from './routes'
// import Clock from './components/entry'
import RecipeList from './RecipeList'
import GetRecipesButton from './GetRecipesButton'
import SelectStartTime from './SelectStartTime'
import SelectEndTime from './SelectEndTime'
import Ingredients from './Ingredients'
import 'react-times/css/material/default.css'
// or you can use classic theme
import 'react-times/css/classic/default.css'

const Homepage = () => {
  return (
    <div>
      <div className="headerText h1">IT'S DINNER TIME!</div>
      <br />
      <img
        src="http://www.beavermethodist.org/wp-content/uploads/Dinner-Plate-Clipart-700x669.jpg"
        className="imageSize"
      />
      <br />
      <div className="headerText h2">
        SELECT YOUR DESIRED TIME TO START AND END COOKING
      </div>
      <div className="headerText">
        <GetRecipesButton />
      </div>
      <br />
      <div>
        <Ingredients />
      </div>
      <div className="row">
        <div className="col headerText">
          Select Cook Start Time:
          <SelectStartTime />
        </div>
        <div className="col headerText">
          Select Cook End Time:
          <SelectEndTime />
        </div>
      </div>
      <div>
        <RecipeList />
      </div>
    </div>
  )
}

export default Homepage
