import React, {Component} from 'react'
import {connect} from 'react-redux'

const SingleRecipe = props => {
  const recipe = props.singleRecipe
  return (
    recipe && (
      <div className="card text-center">
        <h1 className="card-header">RECIPE DETAILS</h1>
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <h5>
            <a target="_blank" href={recipe.attribution.url}>
              View Full Recipe
            </a>
          </h5>
          <br />
          <img src={recipe.images[0].hostedLargeUrl} />
          <br />
          <div>Total Cook Time: {recipe.totalTime}</div>
          <br />
          <div>Number of Servings: {recipe.numberOfServings}</div>
          <br />
          <div className="font-weight-bold">Ingredients:</div>
          {recipe.ingredientLines.map(ingredient => {
            return <div className="font-weight-light">{ingredient}</div>
          })}
          <br />
        </div>
      </div>
    )
  )
}

const mapState = state => {
  return {
    singleRecipe: state.recipes.selectedRecipe
  }
}

export default connect(mapState)(SingleRecipe)
