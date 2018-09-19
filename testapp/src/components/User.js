import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <h3>Привет, {name}</h3>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}
