import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Page extends Component {
  btnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  render() {
    const { year, photos, isLoading } = this.props

    return (
      <div className="ib page">
        <button className="btn" onClick={this.btnClick}>
          2018
        </button>
        <button className="btn" onClick={this.btnClick}>
          2017
        </button>
        <button className="btn" onClick={this.btnClick}>
          2016
        </button>
        <button className="btn" onClick={this.btnClick}>
          2015
        </button>
        <p>{year}</p>
        <p>{isLoading ? 'Loading...' : photos.length}</p>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {photos.map(photo => {
            return (
              <li key={photo.id}>
                <img src={photo.sizes[3].url} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
