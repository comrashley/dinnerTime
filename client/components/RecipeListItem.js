import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchSingleRecipe} from '../store/recipesReducer'

class RecipeListItem extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log('hit submit', this.props.recipe.id)
    this.props.fetchSingleRecipe(this.props.recipe.id)
    this.props.history.push('/recipeDetail')
  }
  render() {
    return (
      <div className="card p-2 m-3 " style={{width: '18rem'}}>
        <div className="card-body headerText">
          <div className="headerText card-header">
            {this.props.recipe.recipeName}
          </div>
          <img
            className="card-img-top mt-4 single-card"
            src={this.props.recipe.smallImageUrls}
            alt="Card image cap"
          />
          <br />
          <div className="card-title center">
            <div>Recipe Source: {this.props.recipe.sourceDisplayName}</div>
            <button
              className="btn btn-outline-secondary"
              onClick={this.handleSubmit}
              type="button"
            >
              Recipe Details
            </button>
          </div>
        </div>
      </div>
    )
  }
}

// const mapState = state => {
//   return {
//     ingredients: state.ingredientList.ingredients
//   }
// }

const mapDispatch = dispatch => {
  return {
    fetchSingleRecipe: id => {
      console.log('in here')
      dispatch(fetchSingleRecipe(id))
    }
  }
}

export default withRouter(connect(null, mapDispatch)(RecipeListItem))
