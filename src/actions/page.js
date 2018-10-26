/* global VK */

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

    VK.Api.call(
      'photos.getAll',
      { owner_id: 8169354, count: 100, extended: 1, v: '5.87' },
      res => {
        try {
          const filteredItems = res.response.items
            .filter(item => {
              const itemDate = new Date(item.date * 1000).getFullYear()
              return itemDate === year
            })
            .sort((a, b) => {
              return b.likes.count - a.likes.count
            })

          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: filteredItems,
          })
        } catch (e) {
          dispatch({
            type: GET_PHOTOS_FAIL,
            error: true,
            payload: new Error(e),
          })
        }
      }
    )
  }
}
