import React, { useEffect, useReducer } from 'react'
//import { Link } from 'gatsby'
//import { getCurrentUser } from '../utils/auth'
import { MyOffers, RubikRegular } from '@project/ui-components'
import styled from 'styled-components'
import { MyAccountService } from '@project/customer-app-service';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1%;
`
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PAGE_DATA_INITIATED':
      return {
        customer: {
          ...state.customer,
          isAccountDetailsLoading: true,
          isOffersDataLoading: true,
        },
      }
    case 'FETCH_PAGE_DATA_SUCCEDED':
      const { accountDetails, customerOffers, personalDetails } = action.payload
      return {
        customer: {
          ...state.customer,
          isAccountDetailsLoading: false,
          isOffersDataLoading: false,
          isPersonalDetailsLoading: false,
          personalDetails,
          accountDetails,
          customerOffers,
        },
      }
    default:
      throw new Error()
  }
}

const MyAccount = props => {
  
  const [state, dispatch] = useReducer(reducer, {
    customer: {
      isPersonalDetailsLoading: false,
      isAccountDetailsLoading: false,
      isOffersDataLoading: false,
      personalDetails: {
        customerId: '',
        fullName: '',
        email: '',
      },
      accountDetails: {
        accountId: '',
        plasticCardNumber: '',
      },
      customerOffers: [],
    },
  })

  useEffect(() => {
    async function fetchPageData() {
      const pageData = MyAccountService.fetchMyAccountPageData(props.customerId, props.accountId);
      dispatch({ type: 'FETCH_PAGE_DATA_INITIATED' })

      const myAccountPageData = await pageData;

      dispatch({
        type: 'FETCH_PAGE_DATA_SUCCEDED',
        payload: { ...myAccountPageData },
      })
    }

    fetchPageData()
  }, [props.accountId, props.customerId])

  const { accountDetails, customerOffers, personalDetails } = state.customer
  return (
    <Container>
      <RubikRegular />
      <MyOffers
        customerOffers={customerOffers}
        accountDetails={accountDetails}
        personalDetails={personalDetails}
      />
    </Container>
  )
}

export default MyAccount
