import React, {Component} from 'react'
import {connect} from 'react-redux'
import RecipeListItem from './RecipeListItem'
// import GetRecipesButton from './GetRecipesButton'

const RecipeList = props => {
  const recipes = props.recipes || []
  console.log('recipes', recipes)
  return (
    <div>
      <ul>
        {recipes.length ? (
          <div>
            <div className="headerText">Recipe List:</div>
            <div className="card-columns">
              {recipes.map(recipe => {
                return <RecipeListItem key={recipe.id} recipe={recipe} />
              })}
            </div>
          </div>
        ) : (
          <div className="headerText">Pick a time to get cookin'!</div>
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
