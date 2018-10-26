import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { handleLogin } from '../actions/user'

class UserContainer extends Component {
  render() {
    const { user, handleLogin } = this.props
    console.info('user rerender')
    return (
      <User
        name={user.name}
        error={user.error}
        isFetching={user.isFetching}
        handleLogin={handleLogin}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch(handleLogin()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
