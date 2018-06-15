import React, {Component} from 'react'

const RecipeListItem = props => {
  return (
    <div className="card p-2 m-3 " style={{width: '18rem'}}>
      <div className="card-body">
        <img
          className="card-img-top mt-4 single-card"
          src={props.recipe.smallImageUrls}
          alt="Card image cap"
        />
        <div className="card-title center">
          <div className="headerText">{props.recipe.recipeName}</div>
          <br />
          <div>Recipe Source: {props.recipe.sourceDisplayName}</div>
        </div>
      </div>
    </div>
  )
}

export default RecipeListItem
