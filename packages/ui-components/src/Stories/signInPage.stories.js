import React, { useState } from "react";
import { SignInUI, SignInPage, RubikRegular } from "@project/ui-components";
import styled from "styled-components";
import "@storybook/addon-console";
import BgImage from "../Assets/Images/zac-ong-394558-unsplash.png";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  top: 0;
  background-image: url(${BgImage});
  height: 100%;
  width: 100%;
`;

export default { title: "Sign-In Page Component", component: SignInPage };

export const withLayout = () => {
  const [isTryingToSignIn, setIsTryingToSignIn] = useState(false);

  const handle_SignIn = (email, pwd) => {
    console.log(`Sign in requested, email: ${email}; password: ${pwd}`);
    setIsTryingToSignIn(true);
    console.log("Trying to sign you in");
    // Simulate a signin-delay
    setTimeout(() => {
      setIsTryingToSignIn(false);
      console.log("Sig-in complete!");
    }, 5000);
  };

  return (
    <Container>
      <RubikRegular />
      <SignInPage bgImageComponent={<BackgroundImage />}>
        <SignInUI
          titleHeading="Sign-in to Yeo"
          titlePara="Please enter your credentials to proceed."
          onSignIn={handle_SignIn}
          isTryingToSignIn={isTryingToSignIn}
        />
      </SignInPage>
    </Container>
  );
};
