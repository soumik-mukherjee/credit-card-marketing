import React from "react";
import { AppLogo, RubikRegular } from "@project/ui-components";
import styled from "styled-components";

const Container = styled.div``;

export default { title: "Branding - Logo" };

export const withLogo = () => (
  <Container>
    <RubikRegular />
    <AppLogo />
  </Container>
);
