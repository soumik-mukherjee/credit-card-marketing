import React from "react";
import styled from "styled-components";
import { CustomerDetails, CustomerOffers } from "@project/ui-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1%;
`;

const Spacer =  styled.div`
  height: 2rem;
`;

const MyOffers = (props) => {
  const { customerOffers, personalDetails, accountDetails } = props;
  const { customerId, fullName, email } = personalDetails || {};
  const { plasticCardNumber } = accountDetails || {};
  return (
    <Container>
      <CustomerDetails
        title="Your Profile"
        customerId={customerId}
        fullName={fullName}
        email={email}
        plasticCardNumber={plasticCardNumber}
      ></CustomerDetails>
      <Spacer />
      <CustomerOffers
        title="Offers on your card"
        offers={customerOffers}
      ></CustomerOffers>
    </Container>
  );
};

export default MyOffers;
