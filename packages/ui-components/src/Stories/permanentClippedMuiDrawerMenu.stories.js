import React from "react";
import { PermanentClippedMuiDrawerMenu, DemoMuiTheme } from "@project/ui-components";
import { ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import "@storybook/addon-console";

const Container = styled.div`
  width: 98vw;
  height: 98vh;
`;

export default { title: "Mui Drawer Menu - Permanent & Clipped", component: PermanentClippedMuiDrawerMenu };

const handleMenuClick = () => {
  console.log("Menu button clicked!");
};

const handleUserButtonClick = () => {
  console.log("User button clicked!");
};

export const withFullWidth = () => {
  return (
    <Container>
      <PermanentClippedMuiDrawerMenu

      />
    </Container>
  );
};

export const withDemoMuiTheme = () => {
  return (
    <ThemeProvider theme={DemoMuiTheme}>
      <Container>
        <PermanentClippedMuiDrawerMenu

        />
      </Container>
    </ThemeProvider>
  );
};
