import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
    const { year, photos } = this.props.page

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
          <p>
            {name}, {surname}, {age}
          </p>
          <p>
            {year}, {photos.length}
          </p>
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

export default connect(mapStateToProps)(App)
