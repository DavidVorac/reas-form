import React from "react";
import RadioButton from "../../FormElements/RadioButton";

const Liberecky = props => {
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
      {RadioButtonDistrict("Česká Lípa", "ceska-lipa")}
      {RadioButtonDistrict("Jablonec nad Nisou", "jablonec-nad-nisou")}
      {RadioButtonDistrict("Liberec", "liberec")}
      {RadioButtonDistrict("Semily", "semily")}
    </div>
  );
};

export default Liberecky;
