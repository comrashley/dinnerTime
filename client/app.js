import React, {Component} from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Clock from './components/entry'
import RecipeList from './components/RecipeList'
import GetRecipesButton from './components/GetRecipesButton'
import SelectStartTime from './components/SelectStartTime'
import SelectEndTime from './components/SelectEndTime'
import 'react-times/css/material/default.css'
// or you can use classic theme
import 'react-times/css/classic/default.css'

const App = () => {
  return (
    <div className="p-3 px-2">
      IT'S DINNER TIME! SELECT YOUR DESIRED COOK START AND END TIME
      <div>
        <GetRecipesButton />
      </div>
      <div>
        <RecipeList />
      </div>
      <div className="row">
        <div className="col">
          Select Cook Start Time:
          <SelectStartTime />
        </div>
        <div className="col">
          Select Cook End Time:
          <SelectEndTime />
        </div>
      </div>
    </div>
  )
}

export default App
