import { createGlobalStyle } from 'styled-components';
import RubikRegularTtf from "./Rubik-Regular.ttf";

export const RubikRegular = createGlobalStyle`
    @font-face {
        font-family: 'Rubik';
        src: url(${RubikRegularTtf});
        font-weight: 400;
        font-style: normal;
    }
`;
