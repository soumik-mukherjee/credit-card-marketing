import React from 'react'
import AmplifySignIn from '../components/api/SignIn/AmplifySignIn';
import './signIn.css'

const SignInPage = ({ location }) => {
  const { from } = location.state || {};
  return <div className="sign-in-form-container"><AmplifySignIn from={from} /></div>
}

export default SignInPage
