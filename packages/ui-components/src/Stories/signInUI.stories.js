import React from "react";
import { SignInUI, RubikRegular } from "@project/ui-components";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import "@storybook/addon-console";

const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  width: 360px;
  padding: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default { title: "Sign-In Functional Component", component: SignInUI };

export const readyToSignIn = () => (
  <Container>
    <RubikRegular />
    <SignInUI
      titleHeading="Sign-in to Yeo"
      titlePara="Please enter your credentials to proceed."
      onSignIn={action("Sign-in  Clicked!")}
      defaultEmail="hello@world.com"
      defaultPassword="funkypassword123"
    />
  </Container>
);

export const tryingToSignIn = () => (
  <Container>
    <RubikRegular />
    <SignInUI
      titleHeading="Sign-in to Yeo"
      titlePara="Please enter your credentials to proceed."
      onSignIn={action("Sign-in  Clicked!")}
      isTryingToSignIn={true}
      defaultEmail="hello@world.com"
      defaultPassword="funkypassword123"
    />
  </Container>
);

export const authenticationFailed = () => (
  <Container>
    <RubikRegular />
    <SignInUI
      titleHeading="Sign-in to Yeo"
      titlePara="Please enter your credentials to proceed."
      onSignIn={action("Sign-in  Clicked!")}
      didAuthNFail={true}
      authNMessage="Invalid email/password"
      defaultEmail="hello@world.com"
      defaultPassword="funkypassword123"
    />
  </Container>
);
