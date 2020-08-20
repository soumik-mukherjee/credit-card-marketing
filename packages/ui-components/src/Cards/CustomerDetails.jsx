import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 10px 20px 0 rgba(46, 91, 255, 0.07);
  padding: 4%;
  background-color: white;
  border-radius: 8px;
`;

const Title = styled.div`
  padding: 1%;
  font-family: Rubik;
  font-size: 16px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
`;

const AutoSpace = styled.div`
  flex-grow: 1;
`;

const Content = styled.div`
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const CustomerDetails = (props) => {
  const { title, fullName, customerId, email, plasticCardNumber } = props;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <AutoSpace />
      </Header>
      <Content>
        <p>{`Customer Id: ${customerId}`}</p>
        <p>{`Name: ${fullName}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Credit Card Number: ${plasticCardNumber}`}</p>
      </Content>
    </Container>
  );
};

export default CustomerDetails;
