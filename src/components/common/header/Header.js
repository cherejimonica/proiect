import React from "react";

import {
  Container,
  Para,
  Border,
  SimpleDiv1,
  SimpleDiv2,
  Div,
  Img,
  Img2,
  Text,
  Title,
} from "./Header.style";
import WestieLogo from "../../common/img/westielogo.png";
import PhoneLogo from "../../common/img/phone.jpg";
export const Header = () => {
  return (
    <Container>
      <Div>
        <SimpleDiv1>
          <Para>​​spirit, dynamism, ambition</Para>
          <Border />
          <Para>spirit, dinamism, ambitie</Para>
        </SimpleDiv1>
        <Title> West Highland white terrier</Title>
        <SimpleDiv2>
          <Div>
            <Img src={PhoneLogo} alt="phone logo" />
            <Text className="phone" color="#cfd1cf" font-weight="700">
              0040 744 848 317
            </Text>
          </Div>
          <Img2 src={WestieLogo} alt="logo" />
        </SimpleDiv2>
      </Div>
    </Container>
  );
};
