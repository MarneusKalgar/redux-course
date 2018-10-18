import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  renderTemplate = () => {
    const { name, error, isFetching, loginUser } = this.props
    if (error) {
      return <p>Error!</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (name) {
      return <p>{name}</p>
    } else {
      return (
        <button className="btn" onClick={loginUser}>
          Sign In
        </button>
      )
    }
  }

  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
}
