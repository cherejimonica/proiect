import React, { useEffect } from "react";
import {
  Container,
  Text,
  Title,
  Div,
  Divs,
  FirstLine,
  SecondLine1,
  SecondLine2,
  ThirdLine1,
  ThirdLine2,
  Border,
  Title2,
  Meaning,
} from "../components/SecondComp.style";
import { MapO } from "./MapO";
export const SecondComp = () => {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <Container>
      <Title>Contact</Title>
      <Text>Adresa: Oradea, Calea Clujului, nr. 10</Text>

      <Div>
        <FirstLine>Nume</FirstLine>
        <FirstLine>Contact</FirstLine>
      </Div>
      <Border></Border>
      <Div>
        <Divs>
          <SecondLine1> Bondar Alexandru </SecondLine1>
          <ThirdLine1>AE, IDCS, MR, AA, MR </ThirdLine1>
        </Divs>
        <Divs>
          <SecondLine2>alex.bondar@clubdresaj.ro</SecondLine2>
          <ThirdLine2> 0752 682 870 </ThirdLine2>
        </Divs>
      </Div>
      <Div>
        <Divs>
          <SecondLine1>Bondar Emil </SecondLine1>
          <ThirdLine1>MR, AA, IPO, AA, MR</ThirdLine1>
        </Divs>
        <Divs>
          <SecondLine2>emil.bondar@clubdresaj.ro</SecondLine2>
          <ThirdLine2> 0742 356 010 </ThirdLine2>
        </Divs>
      </Div>
      <Title2>Certificari:</Title2>
      <Meaning>IDC = Instructor de dresaj canin</Meaning>
      <Meaning>IDCS = Instructor de dresaj canin de specialitate</Meaning>
      <Meaning>AE = arbitru de lucru</Meaning>
      <Meaning>AA = Asistent atentator</Meaning>
      <Meaning>IPO = Specializarea Utility (IPO+SChH)</Meaning>
      <Meaning>MR = Specializarea Mondiorin</Meaning>

      <MapO />
    </Container>
  );
};
