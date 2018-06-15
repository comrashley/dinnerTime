import React, {Component} from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Clock from './components/entry'
import RecipeList from './components/RecipeList'
import GetRecipesButton from './components/GetRecipesButton'
import SelectStartTime from './components/SelectStartTime'
import SelectEndTime from './components/SelectEndTime'
import Ingredients from './components/Ingredients'
import 'react-times/css/material/default.css'
// or you can use classic theme
import 'react-times/css/classic/default.css'

const App = () => {
  return (
    <div>
      <div className="headerText">
        IT'S DINNER TIME! SELECT YOUR DESIRED TIME TO START AND END COOKING
      </div>
      <div className="headerText">
        <GetRecipesButton />
      </div>

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

export default App
