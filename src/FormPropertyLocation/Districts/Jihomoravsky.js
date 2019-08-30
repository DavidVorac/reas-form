import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Jihomoravsky = props => {
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
      {RadioButtonDistrict("Blansko", "blansko")}
      {RadioButtonDistrict("Brno-město", "brno-mesto")}
      {RadioButtonDistrict("Brno-venkov", "brno-venkov")}
      {RadioButtonDistrict("Břeclav", "breclav")}
      {RadioButtonDistrict("Hodonín", "hodonin")}
      {RadioButtonDistrict("Výškov", "vyskov")}
      {RadioButtonDistrict("Znojmo", "znojmo")}
    </div>
  );
};

export default Jihomoravsky;
