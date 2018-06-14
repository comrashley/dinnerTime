const SET_START_MINUTE = 'SET_START_MINUTE'
const SET_START_HOUR = 'SET_START_HOUR'
const SET_END_MINUTE = 'SET_END_MINUTE'
const SET_END_HOUR = 'SET_END_HOUR'

const initialState = {startMinute: 0, startHour: 0, endMinute: 0, endHour: 0}

export const setStartMinute = startMinute => ({
  type: SET_START_MINUTE,
  startMinute
})
export const setStartHour = startHour => ({type: SET_START_HOUR, startHour})
export const setEndMinute = endMinute => ({type: SET_END_MINUTE, endMinute})
export const setEndHour = endHour => ({type: SET_END_HOUR, endHour})

export default function timeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_START_MINUTE:
      return {...state, startMinute: action.startMinute}
    case SET_START_HOUR:
      return {...state, startHour: action.startHour}
    case SET_END_MINUTE:
      return {...state, endMinute: action.endMinute}
    case SET_END_HOUR:
      return {...state, endHour: action.endHour}
    default:
      return state
  }
}
