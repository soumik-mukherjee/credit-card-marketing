/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($input: GetCustomerInput) {
    getCustomer(input: $input) {
      customerId
      type
      email
      fullName
      userPreferences
      bookmarks
    }
  }
`;
export const getBookmark = /* GraphQL */ `
  query GetBookmark($input: GetBookmarkInput) {
    getBookmark(input: $input) {
      customerId
      url
      createDate
      updateDate
      folder
      title
      description
    }
  }
`;
