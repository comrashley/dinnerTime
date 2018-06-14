import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRecipes} from '../store/recipesReducer'

class GetRecipesButton extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    //evt.preventDefault()
    console.log('here')
    this.props.fetchRecipes('5400')
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleSubmit}>
          GET RECIPES
        </button>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    fetchRecipes: time => {
      dispatch(fetchRecipes(time))
    }
  }
}

export default connect(null, mapDispatch)(GetRecipesButton)
