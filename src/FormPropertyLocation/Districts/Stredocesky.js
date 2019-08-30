import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Stredocesky = props => {
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
      {RadioButtonDistrict("Benešov", "benesov")}
      {RadioButtonDistrict("Beroun", "beroun")}
      {RadioButtonDistrict("Kladno", "kladno")}
      {RadioButtonDistrict("Kolín", "kolin")}
      {RadioButtonDistrict("Kutná Hora", "kutna-hora")}
      {RadioButtonDistrict("Mělník", "melnik")}
      {RadioButtonDistrict("Mladá Boleslav", "mlada-boleslav")}
      {RadioButtonDistrict("Nymburk", "nymburk")}
      {RadioButtonDistrict("Praha-východ", "praha-vychod")}
      {RadioButtonDistrict("Praha-západ", "praha-zapad")}
      {RadioButtonDistrict("Příbram", "pribram")}
      {RadioButtonDistrict("Rakovník", "rakovnik")}
    </div>
  );
};

export default Stredocesky;
