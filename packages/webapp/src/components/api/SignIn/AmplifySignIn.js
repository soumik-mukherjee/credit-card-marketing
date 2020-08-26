import React, { useContext } from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { AuthContext } from '../../../api/AuthContext'
import { navigate } from 'gatsby'

const AmplifySignIn = (props) => {
  const { from } = props;
  const auth = useContext(AuthContext)
  
  if (auth.isUserSignedIn) {
    // Was user redirected to signIn?
    if (typeof from !== 'undefined') {
      navigate(from)
    }
  }
  return <AmplifyAuthenticator ></AmplifyAuthenticator>
}

export default AmplifySignIn
