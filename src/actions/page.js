/* global VK */

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
    })

    VK.Api.call(
      'photos.getAll',
      { owner_id: 8169354, count: 20, v: '5.87' },
      res => {
        if (res.response) {
          console.log(res.response)

          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: {
              photos: res.response.items,
              year: year,
            },
          })
        } else {
          dispatch({
            type: GET_PHOTOS_FAIL,
            payload: new Error('Load Photos Error'),
          })
        }
      }
    )
  }
}
