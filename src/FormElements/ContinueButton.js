import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  padding: 14px 32px 13px;
  font-size: 16px;
  font-weight: 600;
  background-image: linear-gradient(to left, #1875f0 0%, #3294fe 100%);
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.11);
  outline: none;
  border-width: 0;
  border-radius: 30px;
  cursor: pointer;
  animation: show 0.3s ease-out;

  &:hover {
    background: #2577d7;
    border-color: #2577d7;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContinueButton = props => {
  return (
    <Button
      type="button"
      onClick={() =>
        typeof props.callback !== "undefined" ? props.callback() : null
      }
    >
      {props.text}
    </Button>
  );
};

export default ContinueButton;
