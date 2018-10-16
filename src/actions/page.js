export const GET_PHOTOS = 'GET_PHOTOS'
export const SET_PHOTOS = 'SET_PHOTOS'

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS,
      payload: year,
    })
    setTimeout(() => {
      dispatch({
        type: SET_PHOTOS,
        payload: [1, 2, 3],
      })
    }, 1000)
  }
}
