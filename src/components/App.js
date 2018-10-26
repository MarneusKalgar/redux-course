import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer />
      </div>
    )
  }
}

// import { User } from './User'
// import { Page } from './Page'
// import { getPhotos } from '../actions/page'
// import { loginUser } from '../actions/user'

// import './App.css'

// class App extends Component {
//   render() {
//     const { user, page, getPhotos, loginUser } = this.props

//     return (
//       <div className="App">
//         <header className="App-header">
//           <Page
//             year={page.year}
//             photos={page.photos}
//             isLoading={page.isLoading}
//             error={page.error}
//             getPhotos={getPhotos}
//           />
//           <User
//             name={user.name}
//             isFetching={user.isFetching}
//             error={user.error}
//             loginUser={loginUser}
//           />
//         </header>
//       </div>
//     )
//   }
// }

// const mapStateToProps = store => {
//   console.log(store)
//   return {
//     user: store.user,
//     page: store.page,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getPhotos: year => dispatch(getPhotos(year)),
//     loginUser: () => dispatch(loginUser()),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
