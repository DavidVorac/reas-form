import React, { useState } from "react";
import styled from "styled-components";

import District from "./District";

import RadioButton from "../FormElements/RadioButton";
import ContinueButton from "../FormElements/ContinueButton";

const MainHeading = styled.h1`
  color: #182b4a;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
  margin: 10px 0;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

const HeadingDescription = styled.p`
  color: #637181;
  font-size: 16px;
  margin: 10px 0;
  font-weight: 400;
  line-height: 24px;
`;

const RegionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Region = props => {
  const [region, setRegion] = useState(null);
  const [district, setDistrict] = useState(null);

  const RadioButtonRegion = (text, value) => (
    <RadioButton
      name="region"
      text={text}
      value={value}
      callback={region => {
        setRegion(region);
        setDistrict(null);
      }}
      href="#District"
    />
  );

  return (
    <div>
      <MainHeading>Kde se nachází vaše nemovitost?</MainHeading>
      <HeadingDescription>
        Klikněte na kraj a vyberte okres, ve kterém se vaše nemovitost nachází.
      </HeadingDescription>

      <RegionGroup>
        {RadioButtonRegion("Jihočeský", "jihocesky")}
        {RadioButtonRegion("Plzeňský", "plzensky")}
        {RadioButtonRegion("Karlovarský", "karlovarsky")}
        {RadioButtonRegion("Ústecký", "ustecky")}
        {RadioButtonRegion("Liberecký", "liberecky")}
        {RadioButtonRegion("Královéhradecký", "kralovehradecky")}
        {RadioButtonRegion("Pardubický", "pardubicky")}
        {RadioButtonRegion("Olomoucký", "olomoucky")}
        {RadioButtonRegion("Zlínský", "zlinsky")}
        {RadioButtonRegion("Středočeský", "stredocesky")}
        {RadioButtonRegion("Praha", "praha")}
        {RadioButtonRegion("Moravskoslezký", "moravskoslezky")}
        {RadioButtonRegion("Vysočina", "vysocina")}
        {RadioButtonRegion("Jihomoravský", "jihomoravsky")}
      </RegionGroup>

      {region ? (
        <District
          region={region}
          callback={district => setDistrict(district)}
        />
      ) : null}

      {district ? (
        <ContinueButton
          text="Pokračovat"
          callback={() => props.callback(region, district)}
        />
      ) : null}
    </div>
  );
};

export default Region;
