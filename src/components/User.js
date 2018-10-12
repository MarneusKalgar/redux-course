import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  render() {
    const { name, surname, age } = this.props.user
    console.log(this.props)
    return (
      <div>
        <p>
          {name}, {surname}, {age}
        </p>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
}
