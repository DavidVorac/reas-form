import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Zlinsky = props => {
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
      {RadioButtonDistrict("Kroměříž", "kromeriz")}
      {RadioButtonDistrict("Uherské Hradiště", "uherske-hradiste")}
      {RadioButtonDistrict("Vsetín", "vsetin")}
      {RadioButtonDistrict("Zlín", "zlin")}
    </div>
  );
};

export default Zlinsky;
