const ADD_INGREDIENT = 'ADD_INGREDIENT'
const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'

const initialState = {ingredients: []}

export const addIngredient = ingredient => ({type: ADD_INGREDIENT, ingredient})

export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  ingredient
})

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {ingredients: [...state.ingredients, action.ingredient]}
    case REMOVE_INGREDIENT:
      const newIngredients = state.ingredients.filter(
        ingredient => ingredient !== action.ingredient
      )
      return {ingredients: newIngredients}
    default:
      return state
  }
}
