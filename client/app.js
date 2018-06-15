import React, {Component} from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Clock from './components/entry'
import RecipeList from './components/RecipeList'
import GetRecipesButton from './components/GetRecipesButton'
import SelectStartTime from './components/SelectStartTime'
import SelectEndTime from './components/SelectEndTime'
import Ingredients from './components/Ingredients'
import Homepage from './components/Homepage'
import 'react-times/css/material/default.css'
// or you can use classic theme
import 'react-times/css/classic/default.css'

const App = () => {
  return (
    <div>
      <Routes />
    </div>
  )
}

export default App
