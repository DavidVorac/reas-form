import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Moravskoslezky = props => {
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
      {RadioButtonDistrict("Bruntál", "bruntal")}
      {RadioButtonDistrict("Frýdek-Místek", "frydek-mistek")}
      {RadioButtonDistrict("Karviná", "karvina")}
      {RadioButtonDistrict("Nový Jičín", "novy-jicin")}
      {RadioButtonDistrict("Opava", "opava")}
      {RadioButtonDistrict("Ostrava-město", "ostrava-mesto")}
    </div>
  );
};

export default Moravskoslezky;
