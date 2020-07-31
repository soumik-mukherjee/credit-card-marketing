/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount($input: CreateAccountInput!) {
    createAccount(input: $input) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount($accountId: String!) {
    deleteAccount(accountId: $accountId) {
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
export const createAccountOffer = /* GraphQL */ `
  mutation CreateAccountOffer($accountOffer: CreateAccountOfferInput!) {
    createAccountOffer(accountOffer: $accountOffer) {
      offerId
      offerType
      accountOfferStartDate
      accountOfferEndDate
      status
      statusChangeDate
    }
  }
`;
export const createOffer = /* GraphQL */ `
  mutation CreateOffer($offer: CreateOfferInput!) {
    createOffer(offer: $offer) {
      offerId
      offerType
      offerDescription
      offerSubType
      offerEffectiveDate
      offerExpiryDate
    }
  }
`;
