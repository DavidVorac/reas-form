import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Kralovehradecky = props => {
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
      {RadioButtonDistrict("Hradec Králové", "hradec-kralove")}
      {RadioButtonDistrict("Jičín", "jicin")}
      {RadioButtonDistrict("Náchod", "nachod")}
      {RadioButtonDistrict("Rychnov nad Kněžnou", "rychnov-nad-kneznou")}
      {RadioButtonDistrict("Trutnov", "trutnov")}
    </div>
  );
};

export default Kralovehradecky;
