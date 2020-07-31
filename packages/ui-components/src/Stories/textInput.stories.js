import React from "react";
import {
  TextInput,
  DebouncedTextInput,
  RubikRegular,
} from "@project/ui-components";
import styled from "styled-components";
import "@storybook/addon-console";

const Container = styled.div`
  display: flex;
  width: 20vw;
  padding: 10% 2% 10% 2%;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin: 0.4rem;
  border: 0.5px solid black;
`;

export default {
  title: "Text Inputs",
  component: TextInput,
  subcomponents: { DebouncedTextInput },
};

export const textInput = () => {
  const handleChange_TextInput = (text) => console.log(`You entered: ${text}`);

  return (
    <Container>
      <RubikRegular />
      <TextInput onTextEntered={handleChange_TextInput} />
    </Container>
  );
};

export const debouncedTextInput = () => {
  const handleChange_DebouncedTextInput = (text) =>
    console.log(`You entered: ${text}`);

  return (
    <Container>
      <RubikRegular />
      <DebouncedTextInput
        onTextEntered={handleChange_DebouncedTextInput}
        debounceDelayMillis="1000"
      />
    </Container>
  );
};
