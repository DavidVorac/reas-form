import React, { useState } from "react";
import styled from "styled-components";

import FormContent from "./FormContent";

import ImgPath from "../assets/icons/checkmark.svg";

const FormCardStyles = styled.div`
  max-width: 700px;
  width: 100%;
  min-height: 300px;
  margin: 20px 10px;
  padding: 30px 32px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 3px 30px;

  @media (max-width: 340px) {
    margin: 20px auto;
  }

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SendSuccess = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

const TextWrap = styled.div`
  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  max-width: 76px;
  margin-bottom: 25px;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Heading = styled.p`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormPropertyLocation = () => {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (region, district) => {
    setResults({
      region,
      district
    });
  };

  const FormCard = styled(FormCardStyles)`
    background: ${results === null ? null : "#1875f0"};
  `;

  return (
    <FormCard>
      <Form>
        {results === null ? (
          <FormContent
            callback={(region, district) => handleFormSubmit(region, district)}
          />
        ) : (
          <SendSuccess>
            <Img src={ImgPath} alt="check icon" />
            <TextWrap>
              <Heading>Formulář odeslán</Heading>
              <p>Vybraný kraj: {results.region}</p>
              <p>Vybraný okres: {results.district}</p>
            </TextWrap>
          </SendSuccess>
        )}
      </Form>
    </FormCard>
  );
};

export default FormPropertyLocation;
