import React from "react";
import {
    NavMenuPanel,
  RubikRegular,
  AppLogo,
  NavMenuButton
} from "@project/ui-components";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { faCodeBranch, faCog } from "@fortawesome/free-solid-svg-icons";
import MyPhoto from "../Assets/Images/me-no-background.jpg";
import styled from "styled-components";
import "@storybook/addon-console";

const Container = styled.div`
  width: 98vw;
  height: 98vh;
  background-color: rgba(46, 91, 255, 0.07);
`;

const MenuPanelLayout = styled.div`
  width: 80px;
  height: 100%;
`;

export default { title: "Nav Menu Panel Component", component: NavMenuPanel };

export const leftMenuPanel = () => {
  return (
    <Container>
      <RubikRegular />
      <MenuPanelLayout>
        <NavMenuPanel>
          <NavMenuButton
            onClick={(e) => console.log("Click Handled, from FaIconButton!")}
            faIcon={faCodeBranch}
          />
          <NavMenuButton
            onClick={(e) => console.log("Click Handled, from FaIconButton!")}
            faIcon={faCog}
          />
        </NavMenuPanel>
      </MenuPanelLayout>
    </Container>
  );
};
