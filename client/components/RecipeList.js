import React, {Component} from 'react'
import {connect} from 'react-redux'
// import GetRecipesButton from './GetRecipesButton'

const RecipeList = props => {
  const recipes = props.recipes || []
  console.log('recipes', recipes)
  return (
    <div>
      List of Recipes
      <ul>
        {recipes.length ? (
          recipes.map(recipe => {
            return <li key={recipe.id}>{recipe.recipeName}</li>
          })
        ) : (
          <div>No recipes yet</div>
        )}
      </ul>
    </div>
  )
}

const mapState = state => {
  return {recipes: state.recipes.list}
}

// const mapDispatch = dispatch => {
//   return {
//     fetchRecipes: time => {
//       dispatch(fetchRecipes(time))
//     }
//   }
// }

export default connect(mapState)(RecipeList)
