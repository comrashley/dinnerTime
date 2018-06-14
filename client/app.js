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

const date = new Date()

const App = () => {
  return (
    <div>
      {/* <div>
        Here is clock
        <Clock value={date} />
      </div> */}
      <div>
        <GetRecipesButton />
      </div>
      <div>
        <RecipeList />
      </div>
      <div>
        Select Cook Start Time:
        <SelectStartTime />
      </div>
      <div>
        Select Cook End Time:
        <SelectEndTime />
      </div>
    </div>
  )
}

export default App
