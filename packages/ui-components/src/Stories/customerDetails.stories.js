import React from "react";
import { CustomerDetails, RubikRegular } from "@project/ui-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1%;
  background-color: rgba(46, 91, 255, 0.07);
`;

export default { title: "Customer Details Card", component: CustomerDetails };

const sampleData = {
  customerId: "123",
  fullName: "Soumik Mukherjee",
  email: "foo@bar.com",
  plasticCardNumber: "7777-8888-9999-5555"
};

export const withDemoData = () => (
  <Container>
    <RubikRegular />
    <CustomerDetails
      title="Your Profile"
      customerId={sampleData.customerId}
      fullName={sampleData.fullName}
      email={sampleData.email}
      plasticCardNumber={sampleData.plasticCardNumber}
    ></CustomerDetails>
  </Container>
);
