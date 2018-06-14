import React, {Component} from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Clock from './components/entry'
import RecipeList from './components/RecipeList'
import GetRecipesButton from './components/GetRecipesButton'
import SelectTime from './components/SelectTime'
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
        <SelectTime />
      </div>
      <div>
        <GetRecipesButton />
      </div>
      <div>
        <RecipeList />
      </div>
    </div>
  )
}

export default App
