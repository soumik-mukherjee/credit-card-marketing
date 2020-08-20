/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import Auth from '@aws-amplify/auth'
import { setUser } from './src/utils/auth'
import Amplify, { ServiceWorker } from '@aws-amplify/core'
import { AwsAppSyncApiConfig, ApiId } from '@project/customer-app-service'

const serviceWorker = new ServiceWorker()
let registeredServiceWorker
const registerServiceWorker = function() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async function() {
      registeredServiceWorker = await serviceWorker.register(
        '../api-proxy-sw.js',
        '../api/'
      )

      console.log(
        '[Service Worker] - Service Worker Registered : ',
        registeredServiceWorker
      )
    })
  }
}

// To enable service worker, uncomment the line below
// registerServiceWorker()

// Limit the global config to Cognito specific only
// API configuration parameters are intentionally omitted here
let awsConfig = {
  aws_project_region: process.env.AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.USER_POOLS_WEB_CLIENT_ID,
}

Amplify.configure(awsConfig)

// init API configuration parameters and store them in a singleton as key-value pairs
// where key identifies a specific API, and the value is an object with all
// required params for API specific config

const ccOffersApiConfig = {
  aws_appsync_graphqlEndpoint:
    process.env.CREDIT_CARD_OFFERS_API_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.CREDIT_CARD_OFFERS_API_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.CREDIT_CARD_OFFERS_API_APPSYNC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.CREDIT_CARD_OFFERS_API_APIKEY,
}

const custBookmarkApiConfig = {
  aws_appsync_graphqlEndpoint:
    process.env.CUSTOMER_BOOKMARKS_API_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.CUSTOMER_BOOKMARKS_API_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.CUSTOMER_BOOKMARKS_API_APPSYNC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.CUSTOMER_BOOKMARKS_API_APIKEY,
}

// Add these config value-objects to the singleton for later use
AwsAppSyncApiConfig.addConfig(ApiId.CREDIT_CARD_OFFERS_API, ccOffersApiConfig)
console.log('CREDIT_CARD_OFFERS_API :', ccOffersApiConfig)
AwsAppSyncApiConfig.addConfig(
  ApiId.CUSTOMER_BOOKMARKS_API,
  custBookmarkApiConfig
)

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
    })
    .catch(err => {
      window.localStorage.setItem('gatsbyUser', null)
    })
}
