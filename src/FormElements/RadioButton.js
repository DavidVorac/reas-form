import React from "react";
import styled from "styled-components";

const Label = styled.label`
  position: relative;
  width: 100%;
  max-width: 160px;
  min-height: 20px;
  display: inline-flex;
  align-items: center;
  padding: 7px 4px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 700px) {
    max-width: 128px;
  }
`;

const CustomRadioButton = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  &::before {
    width: 20px;
    height: 20px;
    content: "";
    display: inline-block;
    min-width: 20px;
    box-sizing: content-box;
    border-color: #8690a0;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: -9px;
  left: 1px;
  overflow: visible;
  transform: rotate(-90deg);
`;
const Circle = styled.circle`
  stroke-dasharray: 150; /* this value is the pixel circumference of the circle */
  stroke-dashoffset: 150;

  @keyframes donutAnimation {
    to {
      stroke-dashoffset: 10; /* 50% would be 220 (half the initial value specified above) */
    }
  }

  @keyframes donutAnimation {
    to {
      stroke-dashoffset: 80;
    }
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ div::before {
    ${"" /* background: #1875f0; */}
  }

  &:checked ~ div .circle_animation {
    animation: donutAnimation 0.2s ease-out forwards;
  }
`;

const Text = styled.span`
  color: #8690a0;
  font-size: 16px;
  font-weight: 400;
  margin-left: 5px;
  white-space: initial;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const RadioButton = props => {
  return (
    <Label htmlFor={props.value}>
      <Input
        type="radio"
        name={props.name}
        value={props.value}
        id={props.value}
        onChange={() =>
          typeof props.callback !== "undefined"
            ? props.callback(props.value)
            : null
        }
        required
      />
      <CustomRadioButton>
        <Svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <g>
            <Circle
              className="circle_animation"
              r="10"
              cy="10"
              cx="10"
              strokeWidth="4"
              stroke="#1875F0"
              fill="none"
            />
          </g>
        </Svg>
      </CustomRadioButton>
      <Text>{props.text}</Text>
    </Label>
  );
};

export default RadioButton;
