import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: column;
  margin: 0 0 0 0;
  font-size: 29px;
  padding: 5%% 0% 5% 0%;
`;

const MenuButtonGroup = (props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default MenuButtonGroup;
