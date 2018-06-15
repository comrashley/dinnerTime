import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addIngredient} from '../store/ingredientsReducer'

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    this.props.addIngredient(this.state.ingredient)
    this.setState({
      ingredient: ''
    })
  }
  handleChange(evt) {
    // const ingreds = [...this.state.ingredients, evt.target.value]
    console.log(evt.target)
    this.setState({
      [evt.target.name]: evt.target.value
      // ingredients: ingreds
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div>Select Ingredients to include in your search</div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="ingredient"
            value={this.state.ingredient}
          />
        </form>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={this.handleSubmit}
        >
          ADD INGREDIENT
        </button>
        <div>
          {this.props.ingredients.map(ingredient => {
            return <div>{ingredient}</div>
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    ingredients: state.ingredientList.ingredients
  }
}

const mapDispatch = dispatch => {
  return {
    addIngredient: ingredient => {
      dispatch(addIngredient(ingredient))
    }
  }
}

export default connect(mapState, mapDispatch)(Ingredients)
