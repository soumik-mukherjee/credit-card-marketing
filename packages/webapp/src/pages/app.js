import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Details from "../components/Details"
import Home from "../components/Home"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import PrivateRoute from "../components/PrivateRoute"
import MyAccount from "../components/MyAccount"


const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={ Home } />
      <PrivateRoute path="/app/profile" component={ Details } />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
      <MyAccount path="/app/MyAccount" accountId="76584123" customerId="123"/>
    </Router>
  </Layout>
)

export default App