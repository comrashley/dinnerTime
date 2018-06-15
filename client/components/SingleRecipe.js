import React, {Component} from 'react'
import {connect} from 'react-redux'

const SingleRecipe = props => {
  const recipe = props.singleRecipe
  return <div>{recipe.name}</div>
}

const mapState = state => {
  return {singleRecipe: state.recipes.selectedRecipe}
}

export default connect(mapState)(SingleRecipe)
