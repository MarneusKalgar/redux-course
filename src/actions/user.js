export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_SUCCESS'

export function loginUser() {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(res => {
      if (res.session) {
        let userName = res.session.user.first_name

        dispatch({
          type: LOGIN_SUCCESS,
          payload: userName,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Auth Error'),
        })
      }
    }, 4)
  }
}
