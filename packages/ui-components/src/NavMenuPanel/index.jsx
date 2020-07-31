import React from "react";
import styled from "styled-components";
import NavMenuButtonGroup from "./NavMenuButtonGroup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: stretch;
`;

const AutoSpace = styled.div`
  flex-grow: 1;
`;

const FixedSpace = styled.div`
  height: 15%;
  width: 80px
`;

const NavMenuPanel = (props) => {
  const { children } = props;

  return (
    <Container>
      <FixedSpace />
      <NavMenuButtonGroup>{children}</NavMenuButtonGroup>
      <AutoSpace />
    </Container>
  );
};

export default NavMenuPanel;
