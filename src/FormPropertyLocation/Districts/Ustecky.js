import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Ustecky = props => {
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
      {RadioButtonDistrict("Chomutov", "chomutov")}
      {RadioButtonDistrict("Děčín", "decin")}
      {RadioButtonDistrict("Litoměřice", "litomerice")}
      {RadioButtonDistrict("Louny", "louny")}
      {RadioButtonDistrict("Most", "most")}
      {RadioButtonDistrict("Teplice", "teplice")}
      {RadioButtonDistrict("Ústí nad Labem", "usti-nad-labem")}
    </div>
  );
};

export default Ustecky;
