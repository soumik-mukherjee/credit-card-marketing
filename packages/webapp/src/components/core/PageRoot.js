import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { AuthContext } from '../../utils/AuthContext'
import { Hub } from '@aws-amplify/core'
import { allAuthEventsListener } from '../../utils/AmplifyAuthListeners'
//import Layout from '../layout'
import AppShell from '../api/AppShell'
import { initialAppAuthState } from '../../utils/auth'

const PageRoot = ({ element }) => {
  //const [authData, setAuthData] = useState(authData)
  //const currentAuthUser = currentUser.get();
  const { isUserSignedIn, username, attributes } = initialAppAuthState.get()

  /*
  const onPostSignIn = () => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        const { username, attributes } = user
        setAuthData({
          ...authData,
          isSignedIn: true,
          username,
          attributes,
        })
      })
      .catch(err => {
        //logger.error('Error fetching authenticated user', err)
      })
  }

  const onPostSignOut = () => {
    setAuthData({
      ...authUser,
      isSignedIn: false,
    })
  }

  const tryGetCurrentAuthenticatedUser = () => {
    //let currAuthUser = {};
    return Auth.currentAuthenticatedUser()
    //return currAuthUser;
  }

  */

  useEffect(() => {
    //const logger = new Logger('Auth Listener Logger')
    //Hub.listen('auth', authListener)
  })

  return (<>{element}</>)
}

/*
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
*/

export default PageRoot
