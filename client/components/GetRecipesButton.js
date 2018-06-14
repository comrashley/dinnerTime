import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRecipes} from '../store/recipesReducer'
import convertTime from './utils/convertTime'

class GetRecipesButton extends Component {
  constructor(props) {
    super(props)
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
    console.log(secs)
    this.props.fetchRecipes(secs)
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

const mapState = state => {
  return {
    times: state.times
  }
}

const mapDispatch = dispatch => {
  return {
    fetchRecipes: time => {
      dispatch(fetchRecipes(time))
    }
  }
}

export default connect(mapState, mapDispatch)(GetRecipesButton)
