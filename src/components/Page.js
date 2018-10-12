import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Page extends Component {
  btnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.setYear(year)
  }

  render() {
    const { year, photos } = this.props
    return (
      <div>
        <p>{year}</p>
        <p>{photos.length}</p>
        <button onClick={this.btnClick}>2018</button>
        <button onClick={this.btnClick}>2017</button>
        <button onClick={this.btnClick}>2016</button>
        <button onClick={this.btnClick}>2015</button>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
}
