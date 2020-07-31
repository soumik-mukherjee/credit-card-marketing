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

const TextInput = (props) => {
  const { onTextEntered, type, disabled, defaultValue } = props;

  const handleChange_Input = (event) => {
    onTextEntered(event.target.value);
  };

  return (
    <StyledInput
      onChange={handleChange_Input}
      type={type}
      disabled={disabled}
      defaultValue={defaultValue}
    />
  );
};

export default TextInput;
