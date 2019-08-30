import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Praha = props => {
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
      {RadioButtonDistrict("Praha 1", "praha-1")}
      {RadioButtonDistrict("Praha 2", "praha-2")}
      {RadioButtonDistrict("Praha 3", "praha-3")}
      {RadioButtonDistrict("Praha 4", "praha-4")}
      {RadioButtonDistrict("Praha 5", "praha-5")}
      {RadioButtonDistrict("Praha 6", "praha-6")}
      {RadioButtonDistrict("Praha 7", "praha-7")}
      {RadioButtonDistrict("Praha 8", "praha-8")}
      {RadioButtonDistrict("Praha 9", "praha-9")}
      {RadioButtonDistrict("Praha 10", "praha-10")}
    </div>
  );
};

export default Praha;
