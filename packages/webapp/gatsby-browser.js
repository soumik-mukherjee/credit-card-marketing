/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import Auth from '@aws-amplify/auth'
import { setUser } from './src/utils/auth'
import Amplify from '@aws-amplify/core'
import config from 'gatsby-plugin-config';

let awsConfig = {
  aws_project_region: config.AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: config.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: config.AWS_COGNITO_REGION,
  aws_user_pools_id: config.USER_POOLS_ID,
  aws_user_pools_web_client_id: config.USER_POOLS_WEB_CLIENT_ID,
  aws_appsync_graphqlEndpoint: config.APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: config.APPSYNC_REGION,
  aws_appsync_authenticationType: config.APPSYNC_AUTHENTICATION_TYPE
}

Amplify.configure(awsConfig)

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const userInfo = {
        ...user.attributes,
        username: user.username
      }
      setUser(userInfo)
    })
    .catch(err => {
      window.localStorage.setItem('gatsbyUser', null)
    })
}
