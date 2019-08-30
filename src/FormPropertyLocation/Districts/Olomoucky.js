import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Olomoucky = props => {
  const RadioButtonDistrict = (text, value) => (
    <RadioButton
      name="district"
      text={text}
      value={value}
      callback={value => props.callback(value)}
    />
  );

  return (
    <div>
      {RadioButtonDistrict("Jeseník", "jesenik")}
      {RadioButtonDistrict("Olomouc", "olomouc")}
      {RadioButtonDistrict("Prostějov", "prostejov")}
      {RadioButtonDistrict("Přerov", "prerov")}
      {RadioButtonDistrict("Šumperk", "sumperk")}
    </div>
  );
};

export default Olomoucky;
