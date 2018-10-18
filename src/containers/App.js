import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/page'
import { loginUser } from '../actions/user'

import './App.css'

class App extends Component {
  render() {
    const { user, page, getPhotos, loginUser } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <Page
            year={page.year}
            photos={page.photos}
            isLoading={page.isLoading}
            getPhotos={getPhotos}
          />
          <User
            name={user.name}
            isFetching={user.isFetching}
            error={user.error}
            loginUser={loginUser}
          />
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
    loginUser: () => dispatch(loginUser()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
