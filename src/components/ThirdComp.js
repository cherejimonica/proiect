import React, { useEffect } from "react";
import {
  Container,
  Text,
  Image1,
  Ul,
  Li,
  EachImg,
  Img,
  Icon,
  Ref,
} from "./ThirdComp.style";
import Pic5 from "./common/img/s5.png";
import Pic1 from "./common/img/s1.png";
import Pic2 from "./common/img/s2.png";
import Pic3 from "./common/img/s3.png";
import Pic4 from "./common/img/s4.png";
import p1 from "./common/img/p1.png";
import p2 from "./common/img/p2.png";
import p3 from "./common/img/p3.png";
import p4 from "./common/img/p4.png";
import p5 from "./common/img/p5.png";
import p6 from "./common/img/p6.png";
import p7 from "./common/img/p7.png";
import p8 from "./common/img/p8.png";
import p9 from "./common/img/p9.png";
import p10 from "./common/img/p10.png";
import p11 from "./common/img/p11.png";
import p12 from "./common/img/p12.png";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export const ThirdComp = () => {
  useEffect(() => {
    document.title = "Sponsors";
  });
  const values = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
  const pages = [
    { link: "https://facebook.com", text: "Facebook Page" },
    {
      link: "https://instagram.com",
      text: "Instagram Page",
    },
    { link: "https://twitter.com", text: "Twitter Page" },
  ];
  const icons = [faFacebookSquare, faInstagramSquare, faTwitterSquare];
  return (
    <Container>
      <Text>
        Partener Principal: Web & IT Solutions Provider :: Servicii Web de la A
        la Z
      </Text>
      <Image1 src={Pic5} alt="first sponsor" />
      <Text>Parteneri Media ai Intalnirilor Westie Oradea:</Text>
      <Ul>
        <Li>
          <EachImg src={Pic1} />
        </Li>
        <Li>
          <EachImg src={Pic2} />
        </Li>
        <Li>
          <EachImg src={Pic3} />
        </Li>
        <Li>
          <EachImg src={Pic4} />
        </Li>
      </Ul>
      <Text>Sponsorii Intalnirilor Westie Oradea:</Text>
      <Ul>
        {values.map((value) => (
          <Li>
            <Img src={value} />
          </Li>
        ))}
      </Ul>
      <Text>
        Vrei sa sponsorizezi evenimentele Clubului Westie Oradea, website-ul sau
        membrii Clubului? In schimbul sponsorizarii vei primi reclama pe site,
        la evenimentele Clubului si pe Pagina si Grupul de Facebook, Instagram
        si Twitter.
      </Text>
      <Ul>
        <Li>
          <Ref href={pages[0].link}>
            <Icon icon={icons[0]} />
          </Ref>
          <Text>{pages[0].text}</Text>
        </Li>
        <Li>
          <Ref href={pages[1].link}>
            <Icon icon={icons[1]} />
          </Ref>
          <Text>{pages[1].text}</Text>
        </Li>
        <Li>
          <Ref href={pages[2].link}>
            <Icon icon={icons[2]} />
          </Ref>
          <Text>{pages[2].text}</Text>
        </Li>
      </Ul>
    </Container>
  );
};
