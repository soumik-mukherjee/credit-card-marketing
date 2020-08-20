import React from "react";
import { MyOffers, RubikRegular } from "@project/ui-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1%;
  background-color: rgba(46, 91, 255, 0.07);
`;

export default { title: "My Offers Page", component: MyOffers };

const sampleData = {
  customerId: "123",
  fullName: "Soumik Mukherjee",
  email: "foo@bar.com",
  plasticCardNumber: "7777-8888-9999-5555",
  offers: [
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
  ],
};

export const withDemoData = () => {
  const { customerId, email, fullName, plasticCardNumber, offers } = sampleData;
  return (
    <Container>
      <RubikRegular />
      <MyOffers
        customerOffers={offers}
        accountDetails={{ plasticCardNumber }}
        personalDetails={{ customerId, email, fullName }}
      ></MyOffers>
    </Container>
  );
};
