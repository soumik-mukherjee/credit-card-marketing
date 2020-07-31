import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.6rem;
  margin: 0.4rem;
  border-radius: 5px;
  text-decoration: none;
  background: white;
  color: #BFC5D2;
  &:hover {
    background: rgba(46,91,255,0.07);
    color: #2E5BFF;
  }
`;

const DisabledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.6rem;
  margin: 0.4rem;
  border-radius: 5px;
  text-decoration: none;
  background: lightgray;
  color: gray;
`;

const Label = styled.span`
  margin: 0 0.4rem 0 0.8rem;
  line-height: 1.2;
  &::before {
    margin: 0 10px;
  }
`;

const ToolbarIconButton = (props) => {
  const { onClick, faIcon, label, isDisabled } = props;

  if (isDisabled) {
    return (
      <DisabledContainer>
        <FontAwesomeIcon icon={faIcon} />
        {label ? <Label>{label}</Label> : <></>}
      </DisabledContainer>
    );
  } else {
    return (
      <Container onClick={onClick}>
        <FontAwesomeIcon icon={faIcon} />
        {label ? <Label>{label}</Label> : <></>}
      </Container>
    );
  }
};

export default ToolbarIconButton;
