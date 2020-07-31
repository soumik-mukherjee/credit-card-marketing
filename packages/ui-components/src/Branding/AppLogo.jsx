import React from "react";
import styled from "styled-components";
import LocoIcon from "../Assets/Images/Loco-Icon.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.4rem;
  margin: 0.4rem;
`;

const LogoIcon = styled.div`
  height: 24px;
  width: 22px;
  background-image: url(${LocoIcon});
`;

const LogoText = styled.p`
  margin: 0 0.4rem 0 0.8rem;
  font-family: Rubik;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
`;

const AppLogo = (props) => {
  return (
    <Container>
      <LogoIcon />
      <LogoText>Kutuka Yeo</LogoText>
    </Container>
  );
};

export default AppLogo;
