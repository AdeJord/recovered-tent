import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import "../App.css";
import "../map.css";
import Map from "../components/Location/Map";
import { AddAPhoto } from "@material-ui/icons";
import { Container, TextContainer } from '../ComponentStyles'

// const Container = styled.div`
//   font-family: "Roboto";
//   display: flex;
//   flex-direction: row;
//   height: auto;
//   width: auto;
//   padding: 10px;
//   padding-bottom: 8vw;
//   overflow: hidden;
//   align-items: center;
//   @media (max-width: 802px) {
//     flex-direction: column;
//     padding-bottom: 20vw
//   }
// `;

// const TextDiv = styled.div`
//   margin: 10px;
//   width: 100%;
//   height: 80vh;
//   font-size: 1.2vw;
//   @media (max-width: 802px) {
//     height: auto;
//   }
// `;

const MapDiv = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 802px) {
    width: 90vw;
  }
`;
const AddressDiv = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  display: flex;
  font-size: 15px;
  padding: 10px;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 802px) {
    width: 90vw;
  }
`;
const ContactUs = () => {
  return (
    <Container>
      <TextContainer>
        <div style={{fontSize: '25px', textAlign: 'center'}}>Our Location</div>
        <AddressDiv>
          Hatherton Marina, Queens Road, Calf Heath, Wolverhampton, WV107DT
        </AddressDiv>
        <MapDiv>
          <Map />
        </MapDiv>
        <p style={{ padding: "15px", color: "darkred", fontSize: '15px'}}>
          What Three Words:- ///armrests.chew.commutes
        </p>
      </TextContainer>
      <TextContainer>
        <div style={{fontSize: '25px', textAlign: 'center'}}>Contact Details</div>
        <br />
        <br />
        <div style={{ paddingTop: '10px'}}>
          <table>
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Role</th>
                <th>Contact Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trust Enquiries</td>
                <td>Christopher Rogers</td>
                <td>Chair of Management Committee</td>
                <td>
                  01922 479926
                  <br />
                  07763 214 524
                  <br />
                  <a href="mailto:chairman@truman-enterprise.org.uk?body=My custom mail body">
                    chairman@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Financial Matters</td>
                <td>Christopher Rogers</td>
                <td>Treasurer</td>
                <td>
                  01922 479926
                  <br />
                  07763 214 524
                  <br />
                  <a href="mailto:chairman@truman-enterprise.org.uk?body=My custom mail body">
                    chairman@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>General Enquiries</td>
                <td>Mariel Bishop</td>
                <td>Secretary</td>
                <td>
                  0121 357 2570
                  <br />
                  <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">
                    info@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Day trip bookings</td>
                <td>Mariel Bishop</td>
                <td>Booking Secretary</td>
                <td>
                  0121 357 2570
                  <br />
                  <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">
                    info@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>NCBA Training Courses</td>
                <td>David Leaper</td>
                <td>Trust Trainer</td>
                <td>
                  07971 191 786
                  <br />
                  <a href="mailto:trainer@truman-enterprise.org.uk?body=My custom mail body">
                    trainer@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Volunteering Opportunities</td>
                <td>Jennifer Christian</td>
                <td>Volunteering</td>
                <td>
                  07908 084 744
                  <br />
                  <a href="mailto:volunteer@truman-enterprise.org.uk?body=My custom mail body">
                    volunteer@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Website, Tripadvisor, Facebook, etc</td>
                <td>Adrian Jordan</td>
                <td>
                  Social Media <br />
                  Co-ordinator
                </td>
                <td>
                  07512 896 176
                  <br />
                  <a href="mailto:feedback@truman-enterprise.org.uk?body=My custom mail body">
                    feedback@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </TextContainer>
    </Container>
  );
};

export default ContactUs;
