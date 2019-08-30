import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Plzensky = props => {
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
      {RadioButtonDistrict("Domažlice", "domazlice")}
      {RadioButtonDistrict("Klatovy", "klatovy")}
      {RadioButtonDistrict("Plzeň-jih", "plzen-jih")}
      {RadioButtonDistrict("Plzeň-město", "plzen-mesto")}
      {RadioButtonDistrict("Plzeň-sever", "plzen-sever")}
      {RadioButtonDistrict("Rokycany", "rokycany")}
      {RadioButtonDistrict("Tachov", "tachov")}
    </div>
  );
};

export default Plzensky;
