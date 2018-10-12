import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { setYear } from '../actions/page'

import './App.css'

class App extends Component {
  render() {
    const { user } = this.props
    const { year, photos } = this.props.page
    const { setYearAction } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <Page year={year} photos={photos} setYear={setYearAction} />
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

const mapDispathToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App)
