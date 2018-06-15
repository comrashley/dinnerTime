import axios from 'axios'

const GET_RECIPES = 'GET_RECIPES'
const GET_SINGLE_RECIPE = 'GET_SINGLE_RECIPE'

const initialState = {recipes: [], selectedRecipe: '', isFetching: true}

const getRecipes = recipes => ({type: GET_RECIPES, recipes})
const getSingleRecipe = recipe => ({type: GET_SINGLE_RECIPE, recipe})

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

export const fetchSingleRecipe = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/recipes/singleRecipe/${id}`)
    dispatch(getSingleRecipe(data))
  }
}

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {...state, list: action.recipes, isFetching: false}
    case GET_SINGLE_RECIPE:
      return {...state, selectedRecipe: action.recipe}
    default:
      return state
  }
}
