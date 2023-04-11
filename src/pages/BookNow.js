import React from "react";
import styled from "styled-components";
import boats from "../images/boats.jpg";
import "../App.css";
import "@fontsource/roboto"; // Defaults to weight 400.
import { Link } from "react-router-dom";
import GroupLeaderPolicy from "./GroupLeaderPolicy";
import { Container, TextContainer } from '../ComponentStyles'


const ImgContainer = styled.div`
  padding-top: 10px;
  width: 90vw;
  height: auto;
`;

const Home = () => {
  const ClickHandle = () => {
    alert("Waiting for a copy of the Group Leader Policy");
  };
  return (
    <Container>
      <div className="page-title">Book your trip Now!</div>
      <ul style={{ padding: "25px" }}>
        <li>Hatherton Marina,</li>
        <li>Queens Road</li>
        <li>Calf Heath,</li>
        <li>Wolverhampton,</li>
        <li>WV107DT</li>
      </ul>
      <p style={{ paddingLeft: "5vw", paddingTop: "2vw" }}>
        Dates are limited! Book your trip now to avoid disappointment.
      </p>

      <TextContainer>
        <div style={{ padding: "35px", paddingBottom: "20px" }}>
          <div style={{ paddingBottom: "15px" }}>
            Call Mariel on <a href="tel:0121 357 2570">0121 357 2570</a> to make
            sure you don't miss out.
          </div>
          <div>Alternatively, email</div>
          <div>
            <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">
              info@truman-enterprise.org.uk
            </a>
          </div>
          <div>to secure your booking.</div>
          <br />
          <div style={{ paddingBottom: "15px" }}>
            Please note that the Group Leader must read the Group Leader Policy,{" "}
          </div>
          <div>
            <Link to="../GroupLeaderPolicy">Click Here for details</Link>
          </div>
        </div>
      </TextContainer>
    </Container>
  );
};

export default Home;
