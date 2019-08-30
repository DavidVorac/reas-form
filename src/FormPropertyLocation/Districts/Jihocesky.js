import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Jihocesky = props => {
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
      {RadioButtonDistrict("České Budějovice", "ceske-budejovice")}
      {RadioButtonDistrict("Český Krumlov", "cesky-krumlov")}
      {RadioButtonDistrict("Jindřichův Hradec", "jindrichuv-hradec")}
      {RadioButtonDistrict("Písek", "pisek")}
      {RadioButtonDistrict("Prachatice", "prachatice")}
      {RadioButtonDistrict("Strakonice", "strakonice")}
      {RadioButtonDistrict("Tábor", "tabor")}
    </div>
  );
};

export default Jihocesky;
