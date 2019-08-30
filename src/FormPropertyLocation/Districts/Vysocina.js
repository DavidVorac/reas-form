import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Vysocina = props => {
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
      {RadioButtonDistrict("Havlíčkův Brod", "havlickuv-brod")}
      {RadioButtonDistrict("Jihlava", "jihlava")}
      {RadioButtonDistrict("Pelhřimov", "pelhrimov")}
      {RadioButtonDistrict("Třebíč", "trebic")}
      {RadioButtonDistrict("Žďár nad Sázavou", "zdar-nad-sazavou")}
    </div>
  );
};

export default Vysocina;
