import React, {Component} from 'react'
import {connect} from 'react-redux'
import RecipeListItem from './RecipeListItem'
// import GetRecipesButton from './GetRecipesButton'

const RecipeList = props => {
  const recipes = props.recipes || []
  console.log('recipes', recipes)
  return (
    <div>
      <br />
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
        <h4 className="headerText">Pick a time to get cookin'!</h4>
      )}
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
