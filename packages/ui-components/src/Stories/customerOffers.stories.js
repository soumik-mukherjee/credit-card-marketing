import React from "react";
import { CustomerOffers, RubikRegular } from "@project/ui-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1%;
  background-color: rgba(46, 91, 255, 0.07);
`;

export default { title: "Customer Offers Card", component: CustomerOffers };

const sampleData = [
  {
    offerId: "546",
    offerType: "BAL",
    accountOfferStartDate: "01-12-2020",
    accountOfferEndDate: "31-01-2021",
    status: "Active",
    statusChangeDate: "01-12-2020",
  },
  {
    offerId: "546",
    offerType: "BAL",
    accountOfferStartDate: "01-12-2020",
    accountOfferEndDate: "31-01-2021",
    status: "Active",
    statusChangeDate: "01-12-2020",
  },
  {
    offerId: "546",
    offerType: "BAL",
    accountOfferStartDate: "01-12-2020",
    accountOfferEndDate: "31-01-2021",
    status: "Active",
    statusChangeDate: "01-12-2020",
  },
];



export const withNoOffersData = () => (
  <Container>
    <RubikRegular />
    <CustomerOffers
      title="Offers on your card"
    ></CustomerOffers>
  </Container>
);

export const withEmptyOffersData = () => (
  <Container>
    <RubikRegular />
    <CustomerOffers
      title="Offers on your card"
    ></CustomerOffers>
  </Container>
);

export const withNonEmptyOffersData = () => (
  <Container>
    <RubikRegular />
    <CustomerOffers
      title="Offers on your card"
      offers={sampleData}
    ></CustomerOffers>
  </Container>
);

