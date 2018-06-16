import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRecipes} from '../store/recipesReducer'
import convertTime from './utils/convertTime'

class GetRecipesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      warningMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    //evt.preventDefault()
    console.log('here')
    const times = this.props.times
    console.log('times props', times)
    const secs = convertTime(
      times.startMinute,
      times.startHour,
      times.endMinute,
      times.endHour
    )
    if (secs <= -1) {
      this.setState({warningMessage: 'Start time must be before End time!'})
    }
    if (secs > 0) {
      //show error message that end time cant be before start time
      const ingredients = this.props.ingredients.join('+')
      console.log('ingreds', ingredients)
      this.props.fetchRecipes(secs, ingredients)
    }
  }
  render() {
    const secs = convertTime(
      this.props.times.startMinute,
      this.props.times.startHour,
      this.props.times.endMinute,
      this.props.times.endHour
    )
    return (
      <div>
        {secs <= -1 &&
          this.state.warningMessage && (
            <div className="alert alert-danger">
              {this.state.warningMessage}
            </div>
          )}
        <button
          className="btn btn-outline-primary btn-lg"
          type="button"
          onClick={this.handleSubmit}
        >
          GET RECIPES
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    times: state.times,
    ingredients: state.ingredientList.ingredients
  }
}

const mapDispatch = dispatch => {
  return {
    fetchRecipes: (time, ingredients) => {
      dispatch(fetchRecipes(time, ingredients))
    }
  }
}

export default connect(mapState, mapDispatch)(GetRecipesButton)
