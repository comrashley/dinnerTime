import axios from 'axios'

const GET_RECIPES = 'GET_RECIPES'

const initialState = {recipes: [], isFetching: true}

const getRecipes = recipes => ({type: GET_RECIPES, recipes})

export const fetchRecipes = (time, ingredients) => {
  return async dispatch => {
    if (ingredients) {
      const {data} = await axios.get(`/api/recipes/${time}/${ingredients}`)
      dispatch(getRecipes(data.matches))
    } else {
      const {data} = await axios.get(`/api/recipes/${time}`)
      dispatch(getRecipes(data.matches))
    }
  }
}

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {list: action.recipes, isFetching: false}
    default:
      return state
  }
}
