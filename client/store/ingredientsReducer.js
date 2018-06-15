const ADD_INGREDIENT = 'ADD_INGREDIENT'

const initialState = {ingredients: []}

export const addIngredient = ingredient => ({type: ADD_INGREDIENT, ingredient})

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {ingredients: [...state.ingredients, action.ingredient]}
    default:
      return state
  }
}
