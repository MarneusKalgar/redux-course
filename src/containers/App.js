import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/page'

import './App.css'

class App extends Component {
  render() {
    const { user, page, getPhotos } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <Page
            year={page.year}
            photos={page.photos}
            isLoading={page.isLoading}
            getPhotos={getPhotos}
          />
          <User user={user} />
        </header>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
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
)(App)
