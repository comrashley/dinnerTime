import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Clock from './components/entry'
import RecipeList from './components/RecipeList'
import GetRecipesButton from './components/GetRecipesButton'

const date = new Date()
const App = () => {
  console.log(date)
  return (
    <div>
      <div>
        Here is clock
        <Clock value={date} />
      </div>
      <GetRecipesButton />
      <div>
        <RecipeList />
      </div>
    </div>
  )
}

export default App
