/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer($input: CreateCustomerInput) {
    createCustomer(input: $input) {
      customerId
      type
      email
      fullName
      userPreferences
      bookmarks
    }
  }
`;
export const createBookmark = /* GraphQL */ `
  mutation CreateBookmark($input: CreateBookmarkInput) {
    createBookmark(input: $input) {
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
