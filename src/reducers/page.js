import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
} from '../actions/page'

const initialState = {
  year: 2017,
  photos: [],
  isLoading: false,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        year: action.payload,
        isLoading: true,
      }

    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload.photos,
        year: action.payload.year,
        isLoading: false,
      }

    case GET_PHOTOS_FAIL:
      return {
        ...state,
        error: action.payload.message,
      }

    default:
      return state
  }
}
