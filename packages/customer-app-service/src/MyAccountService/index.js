import { CreditCardOffersApiQueries } from "@project/credit-card-offers-api";
import { CustomerBookmarksApiQueries } from "@project/customer-bookmarks-api";
import API, { graphqlOperation } from "@aws-amplify/api";
import { ApiId, AwsAppSyncApiConfig } from '@project/customer-app-service';

export const MyAccountService = {
  fetchMyAccountPageData: async (CustomerId, AccountId) => {
    let pageData = {};

    // Begin fetch Customer data block
    // This should set the following fields on the page service return object
    // 1. personalDetails

    // Configure amplify graphql client
    API.configure(AwsAppSyncApiConfig.getConfig(ApiId.CUSTOMER_BOOKMARKS_API));

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
    API.configure(AwsAppSyncApiConfig.getConfig(ApiId.CREDIT_CARD_OFFERS_API));

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

    return pageData;
  },
};
