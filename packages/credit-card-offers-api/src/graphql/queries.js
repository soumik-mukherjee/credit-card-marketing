/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($accountId: String!) {
    getAccount(accountId: $accountId) {
      accountId
      emailId
      firstName
      lastName
      middleName
      plasticCardNumber
      offers {
        offerId
        offerType
        accountOfferStartDate
        accountOfferEndDate
        status
        statusChangeDate
      }
    }
  }
`;
export const getAccountOffer = /* GraphQL */ `
  query GetAccountOffer($input: GetAccountOfferInput!) {
    getAccountOffer(input: $input) {
      offerId
      offerType
      accountOfferStartDate
      accountOfferEndDate
      status
      statusChangeDate
    }
  }
`;
export const getOffer = /* GraphQL */ `
  query GetOffer($offerId: String!) {
    getOffer(offerId: $offerId) {
      offerId
      offerType
      offerDescription
      offerSubType
      offerEffectiveDate
      offerExpiryDate
    }
  }
`;
