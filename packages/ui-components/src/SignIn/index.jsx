import React from "react";
import styled from "styled-components";
import TextInput from "../Inputs/TextInput";
import SignInButton from "./SignInButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 368px;
  width: 325.5px;
  padding: 3%;
`;

const Title = styled.div`
  width: 100%;
  left: 0;
  top: 0;

  h2 {
    color: #2e384d;
    font-family: Rubik;
    font-size: 34px;
    font-weight: 300;
    line-height: 32px;
    margin: 0.6rem 0 0.6rem 0;
  }

  p {
    color: #8798ad;
    font-family: Rubik;
    font-size: 15px;
    line-height: 22px;
    margin: 0.2rem 0 0.2rem 0;
  }
`;

const FieldSet = styled.div`
  width: 100%;

  p {
    color: #b0bac9;
    font-family: Rubik;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1.13px;
    line-height: 14px;
    padding: 0.2rem 0 0.2rem 0;
  }
`;

const AuthNMessageField = styled.div`
  color: palevioletred;
  font-family: Rubik;
  font-size: 15px;
  line-height: 22px;
  margin: 0.2rem 0 0.2rem 0;
`;

const EmptySpacer = styled.div`
  height: 28px;
  width: 100%;
`;

const TextField = styled.div`
  height: 40.63px;
  width: 320px;
`;

const SignInUI = (props) => {
  let email = "";
  let password = "";
  const {
    onSignIn,
    titleHeading,
    titlePara,
    isTryingToSignIn,
    didAuthNFail,
    authNMessage,
    defaultEmail,
    defaultPassword
  } = props;
  const handleClick_SignIn = () => {
    onSignIn(email, password);
  };

  return (
    <Container>
      <Title>
        <h2>{titleHeading}</h2>
        <p>{titlePara}</p>
      </Title>
      {didAuthNFail ? (
        <AuthNMessageField>
          Authentication Failed: {authNMessage}
        </AuthNMessageField>
      ) : (
        <EmptySpacer />
      )}
      <form>
        <FieldSet>
          <p>EMAIL ADDRESS</p>
          <TextField>
            <TextInput
              defaultValue={defaultEmail}
              onTextEntered={(text) => (email = text)}
              usesDebounce
              debounceDelayMillis="1000"
              type="email"
              disabled={isTryingToSignIn}
            />
          </TextField>
        </FieldSet>
        <FieldSet>
          <p>PASSWORD</p>
          <TextField>
            <TextInput
              defaultValue={defaultPassword}
              onTextEntered={(text) => (password = text)}
              usesDebounce
              debounceDelayMillis="1000"
              type="password"
              disabled={isTryingToSignIn}
            />
          </TextField>
        </FieldSet>
        <SignInButton
          onClick={handleClick_SignIn}
          isTryingToSignIn={isTryingToSignIn}
        />
      </form>
    </Container>
  );
};

export default SignInUI;
