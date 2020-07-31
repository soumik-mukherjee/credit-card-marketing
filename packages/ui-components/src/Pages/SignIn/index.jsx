import React from "react";
import styled from "styled-components";
import AppLogo from "../../Branding/AppLogo";

const Container = styled.div`
  height: 90vh;
  width: 80vw;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SignInPane = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70vw;
  justify-content: center;
  align-items: center;
`;

const SignInContainer = styled.div``;

const AppLogoContainer = styled.div`
  padding-right: 30%;
`;
const ElasticGrow = styled.div`
  height: 8vh;
`;

const SignInPage = (props) => {
  const { children, bgImageComponent } = props;
  return (
    <Container>
      <SignInPane>
        <AppLogoContainer>
          <AppLogo />
        </AppLogoContainer>
        <ElasticGrow />
        <SignInContainer>{children}</SignInContainer>
      </SignInPane>
      {bgImageComponent}
    </Container>
  );
};

export default SignInPage;
