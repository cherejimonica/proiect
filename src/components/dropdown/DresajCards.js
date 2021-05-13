import React, { useEffect } from "react";
import { DresajCard } from "../dropdown/DresajCard";
import { Container, Div } from "./DresajCards.style";
import Clicker from "../common/img/clicker.jpg";
import Leash from "../common/img/leash.jpg";
import Steps from "../common/img/steps.jpeg";

export const DresajCards = () => {
  useEffect(() => {
    document.title = "Dresaj";
  });
  const titles = [
    "Avantajele folosirii clickerului in dresaj",
    "Este zgarda electrica eficienta in dresajul cainilor?",
    "Dresaj câini: 11 paşi fundamentali",
  ];
  const paragraphs = [
    "Plimbarea cu un caine needucat este un chin atat pentru stapan si patruped, cat si pentru celelalte persoane din jur. Dresajul este esential pentru cainele din ziua de azi",
    "Raspunsul pe scurt la aceasta intrebare este da. Fara indoiala, aceste instrumente sunt eficiente ca si instrumente ajutatoare in procesul de dresaj al unui caine.",
    "Cine nu şi-ar dori un căţel dresat, care să înţeleagă comenzile stăpânului şi să se comporte precum un copilaş educat şi ascultător? Pentru a ajunge la acest nivel cu patrupedul dumneavoastră, vă sugerăm, în primul rând, să parcurgeţi cei 11 paşi recomandaţi de specialişti. ",
  ];
  const links = [
    "Dresaj/dresaj-clicker",
    "Dresaj/dresaj-lesa",
    "Dresaj/dresaj-pasi",
  ];
  return (
    <Container>
      <Div>
        <DresajCard
          image={Clicker}
          title={titles[0]}
          link={links[0]}
          paragraph={paragraphs[0]}
        ></DresajCard>
        <DresajCard
          image={Leash}
          title={titles[1]}
          link={links[1]}
          paragraph={paragraphs[1]}
        ></DresajCard>
        <DresajCard
          image={Steps}
          title={titles[2]}
          link={links[2]}
          paragraph={paragraphs[2]}
        ></DresajCard>
      </Div>
    </Container>
  );
};
