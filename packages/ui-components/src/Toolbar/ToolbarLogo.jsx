import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0% 0% 0% 5%;
`;

const ToolbarLogo = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default ToolbarLogo;
