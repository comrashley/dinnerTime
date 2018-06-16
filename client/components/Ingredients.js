import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addIngredient, removeIngredient} from '../store/ingredientsReducer'

class Ingredients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleSubmit() {
    this.props.addIngredient(this.state.ingredient)
    this.setState({
      ingredient: ''
    })
  }
  removeItem(ingredient) {
    console.log('ingredient', ingredient)
    this.props.removeIngredient(ingredient)
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render() {
    return (
      <div>
        <h5>Select Ingredients to include in your search</h5>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              onChange={this.handleChange}
              type="text"
              name="ingredient"
              value={this.state.ingredient}
            />
          </div>
        </form>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={this.handleSubmit}
        >
          ADD INGREDIENT
        </button>
        <br />
        <br />
        <div className="row">
          <br />
          <ul className="list-group col-3">
            {this.props.ingredients.map(ingredient => {
              return (
                <div>
                  <li className="list-group-item listSize">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.removeItem(ingredient)}
                    >
                      X
                    </button>{' '}
                    {ingredient}
                  </li>
                </div>
              )
            })}
          </ul>
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
    },
    removeIngredient: ingredient => {
      dispatch(removeIngredient(ingredient))
    }
  }
}

export default connect(mapState, mapDispatch)(Ingredients)
