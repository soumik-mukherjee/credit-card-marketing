import { CreditCardOffersApiQueries } from "@project/credit-card-offers-api";
import { CustomerBookmarksApiQueries } from "@project/customer-bookmarks-api";
import Amplify from "@aws-amplify/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { ConfigKeys, AmplifyConfig } from "@project/customer-app-service";

export const MyAccountService = {
  fetchMyAccountPageData: async (CustomerId, AccountId) => {
    let pageData = {};
    let authConfig = AmplifyConfig.getConfig(ConfigKeys.AUTH);
    let amplifyConfig = { ...authConfig};

    try {
      // Begin fetch Customer data block
      // This should set the following fields on the page service return object
      // 1. personalDetails

      // Configure amplify graphql client
      
      let bookmarksApiConfig = AmplifyConfig.getConfig(ConfigKeys.CUSTOMER_BOOKMARKS_API);
      amplifyConfig = { ...amplifyConfig, ...bookmarksApiConfig};
      
      Amplify.configure(amplifyConfig);
      
      const getCustomerResponse = await API.graphql(
        graphqlOperation(CustomerBookmarksApiQueries.getCustomer, {
          input: { customerId: CustomerId },
        })
      );

      const {
        customerId,
        email,
        fullName,
      } = getCustomerResponse.data.getCustomer;

      const personalDetails = {
        customerId,
        email,
        fullName,
      };

      pageData = { ...pageData, personalDetails };
      

      // End of fetch Customer data block

      // Begin fetch Account & Offers data block
      // This should set the following fields on the page service return object
      // 1. accountDetails
      // 2. customerOffers

      // Configure amplify graphql client

      let creditCardOffersApiConfig = AmplifyConfig.getConfig(ConfigKeys.CREDIT_CARD_OFFERS_API);
      amplifyConfig = { ...amplifyConfig, ...creditCardOffersApiConfig}

      Amplify.configure( amplifyConfig );

      const getAccountResponse = await API.graphql(
        graphqlOperation(CreditCardOffersApiQueries.getAccount, {
          accountId: AccountId,
        })
      );

      const {
        accountId,
        plasticCardNumber,
        offers,
      } = getAccountResponse.data.getAccount;

      const accountDetails = {
        accountId,
        plasticCardNumber,
      };

      const customerOffers = [...offers];

      pageData = { ...pageData, accountDetails, customerOffers };

      // End of fetch Account & Offers data block
    } catch (error) {
      console.error(error);
    }
    return pageData;
  },
};
