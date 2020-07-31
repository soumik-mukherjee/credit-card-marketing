import React from "react";
import styled from "styled-components";
import SignInSpinner from "./SignInSpinner";

const EnabledStateStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 50px;
  width: 320px;
  background-color: #2e5bff;
  border-radius: 4px;
  margin: 6% 0 0 0;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }

  &:active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const DisabledStateStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 320px;
  background-color: #cccbd4;
  border-radius: 4px;
  margin: 6% 0 0 0;
`;

const DisabledLabel = styled.div`
  color: Grey;
  font-family: Rubik;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;

const EnabledLabel = styled.div`
  width: 100%;
  color: #fff;
  font-family: Rubik;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;

const SignInButton = (props) => {
  const { onClick, isTryingToSignIn } = props;
  return (
    <>
      {isTryingToSignIn ? (
        <DisabledStateStyles>
          <SignInSpinner />
          <DisabledLabel>Please wait ....</DisabledLabel>
        </DisabledStateStyles>
      ) : (
        <EnabledStateStyles onClick={onClick}>
          <EnabledLabel>Sign In</EnabledLabel>
        </EnabledStateStyles>
      )}
    </>
  );
};

export default SignInButton;
