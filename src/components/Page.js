import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Page extends Component {
  btnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  render() {
    const { year, photos, error, isLoading } = this.props
    const btnText = [2017, 2016, 2015, 2014]

    let template = null
    if (error) {
      template = <p>обшибка при загрузке</p>
    } else {
      template = (
        <React.Fragment>
          <p>{isLoading ? 'Loading...' : photos.length}</p>
          <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
            {photos.map(photo => {
              return (
                <li key={photo.id}>
                  <img src={photo.sizes[3].url} alt="" />
                  <p style={{ color: 'black' }}>likes {photo.likes.count}</p>
                </li>
              )
            })}
          </ul>
        </React.Fragment>
      )
    }

    return (
      <div className="ib page">
        {btnText.map(btn => {
          return (
            <button className="btn" onClick={this.btnClick} key={btn}>
              {btn}
            </button>
          )
        })}
        <p>{year}</p>
        {template}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
}
