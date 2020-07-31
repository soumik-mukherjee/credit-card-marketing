import React from "react";
import styled from "styled-components";
import ToolbarLogo from "./ToolbarLogo";
import ToolbarButtonGroup from "./ToolbarButtonGroup";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Space = styled.div`
  flex-grow: 2;
`;

const Toolbar = (props) => {
  const { logoComponent, children } = props;

  return (
    <Container>
      <ToolbarLogo>{logoComponent}</ToolbarLogo>
      <Space />
      <ToolbarButtonGroup>
        {children}
      </ToolbarButtonGroup>
    </Container>
  );
};

export default Toolbar;
