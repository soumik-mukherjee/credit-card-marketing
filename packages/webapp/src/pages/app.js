import React from 'react'
import { Router } from '@reach/router'

import Details from '../components/pages/Details'
import Home from '../components/pages/Home'
import MyAccount from '../components/pages/MyAccount'

import PrivateRoute from '../components/api/PrivateRoute'

const App = () => (
  <>
    <Router basepath="/app">
      {/*<SignIn path="/signIn" />*/}

        <PrivateRoute path="/home" component={ Home } />
        <PrivateRoute path="/myAccount" component={ MyAccount } accountId="76584123" customerId="123"/>
        <PrivateRoute path="/myProfile" component={ Details } />

      {/* 
        <Home path="/home" />
        <MyAccount path="/myAccount" />
        <Details path="/myProfile" />
      */}
    </Router>
  </>
)

export default App
