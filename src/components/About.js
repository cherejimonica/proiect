import React, {useEffect} from "react";
import { Container, Text, Divs, WestieImg } from "./About.style";
import Westie from "../components/common/img/westie.jpg";
export const About = () => {
  useEffect(() => {
    document.title = "About Westie";
  });
  return (
    <Container>
      <Divs>
        <WestieImg src={Westie} alt="Westie" />
        <Text>
          Clubul Westie a fost creat in dorinta de a putea tine legatura mai
          usor posesorii de Westie si imprejurimi si de a afla informatii utile,
          noutati si tot ceea ce tine de catelusii lor dragi si scumpi 🙂 Toti
          cei care au un Westie sau vor vrea sa aiba sau pur si simplu le place
          aceasta rasa, sunt bineveniti la noi in Club 🙂
        </Text>
      </Divs>
    </Container>
  );
};
