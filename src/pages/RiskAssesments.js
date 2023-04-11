import React from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Header, TextContainer } from '../ComponentStyles'

const RiskAssesments = () => {
  return (
    <Container style={{paddingBottom: '30vh'}}>
      <Header>Risk Assesments</Header>
      <TextContainer>We take safety very seriously.</TextContainer>
      <TextContainer>Risk assesments are regularly updated on every aspect of your safety during the trip</TextContainer>
      <TextContainer>These are available for you to download</TextContainer>
      <br />
      <TextContainer>Download them here</TextContainer>

      <Link to="/downloads/RiskAss2023.pdf" target="_blank" download>
        DOWNLOAD RISK ASSESMENTS
      </Link>
    </Container>
  );
};

export default RiskAssesments
