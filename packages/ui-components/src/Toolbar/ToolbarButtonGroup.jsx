import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin: 0.4rem;
  font-size: 29px;
  padding: 0% 5%% 0% 5%;
`;

const ToolbarButtonGroup = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default ToolbarButtonGroup;
