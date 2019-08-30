import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Pardubicky = props => {
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
      {RadioButtonDistrict("Chrudim", "chrudim")}
      {RadioButtonDistrict("Pardubice", "pardubice")}
      {RadioButtonDistrict("Svitavy", "svitavy")}
      {RadioButtonDistrict("Ústí nad Orlicí", "usti-nad-orlici")}
    </div>
  );
};

export default Pardubicky;
