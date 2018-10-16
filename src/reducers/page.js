import { GET_PHOTOS, SET_PHOTOS } from '../actions/page'

const initialState = {
  year: 2018,
  photos: [],
  isLoading: false,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        year: action.payload,
        isLoading: true,
      }
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        isLoading: false,
      }

    default:
      return state
  }
}
