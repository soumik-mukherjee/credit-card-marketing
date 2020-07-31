import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgba(224, 231, 255, 0.2);
  border: 1px solid #e0e7ff;
  padding: 1rem;
  color: #2e384d;
  font-family: Rubik;
  font-size: 15px;
  line-height: 18px;
`;

const DebouncedTextInput = (props) => {
  let textEntered = "";
  let debouncedTimeout;

  const { onTextEntered, debounceDelayMillis, type, disabled } = props;

  const handleChange_Input = (event) => {
    textEntered = event.target.value;
    if (debouncedTimeout) {
      clearTimeout(debouncedTimeout);
    }
    debouncedTimeout = setTimeout(
      () => onTextEntered(textEntered),
      debounceDelayMillis
    );
  };

  return (
    <StyledInput
      onChange={handleChange_Input}
      type={type}
      disabled={disabled}
    />
  );
};

export default DebouncedTextInput;
