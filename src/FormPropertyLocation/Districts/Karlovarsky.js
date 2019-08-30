import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Karlovarsky = props => {
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
      {RadioButtonDistrict("Cheb", "cheb")}
      {RadioButtonDistrict("Karlovy Vary", "karlovy-vary")}
      {RadioButtonDistrict("Sokolov", "sokolov")}
    </div>
  );
};

export default Karlovarsky;
