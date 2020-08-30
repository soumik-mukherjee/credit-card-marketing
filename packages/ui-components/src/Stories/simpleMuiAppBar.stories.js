import React from "react";
import { SimpleMuiAppBar, DemoMuiTheme } from "@project/ui-components";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import "@storybook/addon-console";

const Container = styled.div`
  width: 98vw;
  height: 98vh;
`;

export default { title: "Simple Mui AppBar", component: SimpleMuiAppBar };

const handleMenuClick = () => {
  console.log("Menu button clicked!");
};

const handleUserButtonClick = () => {
  console.log("User button clicked!");
};

export const withFullWidth = () => {
  return (
    <Container>
      <SimpleMuiAppBar
        onMenuButtonClick={handleMenuClick}
        title="My Cool App"
        userName="john.doe@foo.com"
        onUserButtonClick={handleUserButtonClick}
      />
    </Container>
  );
};

export const withDemoMuiTheme = () => {
  return (
    <ThemeProvider theme={DemoMuiTheme}>
      <Container>
        <SimpleMuiAppBar
          onMenuButtonClick={handleMenuClick}
          title="My Cool App"
          userName="john.doe@foo.com"
          onUserButtonClick={handleUserButtonClick}
        />
      </Container>
    </ThemeProvider>
  );
};
