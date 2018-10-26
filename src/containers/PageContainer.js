import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/page'

class PageContainer extends Component {
  render() {
    const { page, getPhotos } = this.props
    return (
      <Page
        photos={page.photos}
        year={page.year}
        isLoading={page.isLoading}
        error={page.error}
        getPhotos={getPhotos}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
