import React from "react";
import styled from "styled-components";

import Jihocesky from "./Districts/Jihocesky";
import Jihomoravsky from "./Districts/Jihomoravsky";
import Karlovarsky from "./Districts/Karlovarsky";
import Kralovehradecky from "./Districts/Kralovehradecky";
import Liberecky from "./Districts/Liberecky";
import Moravskoslezky from "./Districts/Moravskoslezky";
import Olomoucky from "./Districts/Olomoucky";
import Pardubicky from "./Districts/Pardubicky";
import Plzensky from "./Districts/Plzensky";
import Praha from "./Districts/Praha";
import Stredocesky from "./Districts/Stredocesky";
import Ustecky from "./Districts/Ustecky";
import Vysocina from "./Districts/Vysocina";
import Zlinsky from "./Districts/Zlinsky";

const DistrictWrap = styled.div`
  margin: 30px 0;
`;

const Heading = styled.h2`
  color: #182b4a;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin: 10px 0;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const Animation = styled.div`
  animation: show 0.3s ease-out;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const District = props => {
  let RadioGroup = props.region;

  switch (props.region) {
    case "jihocesky":
      RadioGroup = (
        <Jihocesky callback={district => props.callback(district)} />
      );
      break;

    case "jihomoravsky":
      RadioGroup = (
        <Jihomoravsky callback={district => props.callback(district)} />
      );
      break;

    case "karlovarsky":
      RadioGroup = (
        <Karlovarsky callback={district => props.callback(district)} />
      );
      break;

    case "kralovehradecky":
      RadioGroup = (
        <Kralovehradecky callback={district => props.callback(district)} />
      );
      break;

    case "liberecky":
      RadioGroup = (
        <Liberecky callback={district => props.callback(district)} />
      );
      break;

    case "moravskoslezky":
      RadioGroup = (
        <Moravskoslezky callback={district => props.callback(district)} />
      );
      break;

    case "olomoucky":
      RadioGroup = (
        <Olomoucky callback={district => props.callback(district)} />
      );
      break;

    case "pardubicky":
      RadioGroup = (
        <Pardubicky callback={district => props.callback(district)} />
      );
      break;

    case "plzensky":
      RadioGroup = <Plzensky callback={district => props.callback(district)} />;
      break;

    case "praha":
      RadioGroup = <Praha callback={district => props.callback(district)} />;
      break;

    case "stredocesky":
      RadioGroup = (
        <Stredocesky callback={district => props.callback(district)} />
      );
      break;

    case "ustecky":
      RadioGroup = <Ustecky callback={district => props.callback(district)} />;
      break;

    case "vysocina":
      RadioGroup = <Vysocina callback={district => props.callback(district)} />;
      break;

    case "zlinsky":
      RadioGroup = <Zlinsky callback={district => props.callback(district)} />;
      break;

    default:
      RadioGroup = null;
      break;
  }

  return (
    <DistrictWrap id="District">
      <Animation>
        {props.region === "praha" ? (
          <Heading>Vyberte městskou část</Heading>
        ) : (
          <Heading>Vyberte okres</Heading>
        )}
        {RadioGroup}
      </Animation>
    </DistrictWrap>
  );
};

export default District;
