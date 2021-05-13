import React, { useState, useEffect } from "react";
import { Container, Para, Title, More } from "./DiverseComp.style";

import { DiverseCompSec } from "./DiverseCompSec";
export const DiverseComp = () => {
  const [showArticles, setShowArticles] = useState(false);
  useEffect(() => {
    document.title = "Diverse";
  });

  return (
    <Container>
      <Title>Informatii generale</Title>
      <Para>
        Câinele din rasa West Highland White Terrier (sau Westie) este cel mai
        probabil foarte apropiat ca și genetică de alți terrieri ai Scoției, cum
        ar fi Cairn Terrier, Dandie Dinmont, Skye Terrier și Terrierul Scoțian.
        A apărut ca și animal de muncă, necesar pentru a îndepărta rozătoarele
        din apropierea casei, cum sunt șobolani / șoareci, iepuri, viezuri și
        vulpi. În ceea ce privește legenda rasei, aceasta îl arată pe Colonelul
        Malcom la vânătoare alături de micul său terrier maro, favoritul său, pe
        care îl împușcă din greșeală, după ce l-a confundat cu o vulpe. Acest
        nefericit eveniment l-a determinat pe Colonelul Malcom să încerce să
        dezvolte o rasă de câini mici albi, capabili să prezinte toate
        funcțiunile unui terrier de muncă, dar pe care să nu îl mai poată
        confunda accidental cu o pradă de vânătoare. Colonelul Malcom a selectat
        cei mai mici căței dintr-o familie de Cairn Terrier și i-a crescut fără
        să îi încrucișeze cu niciun câine de altă culoare. În final, acesta a
        reușit să creeze terrieri albi puri, care au păstrat în totalitate
        caracteristicile de vânătoare și muncă ale unui terrier colorat.
        Cunoscut inițial sub mai multe denumiri, câinele din rasa West Highland
        White Terrier a devenit cunoscut sub prezentul nume la începutul celui
        de-al XX-lea secol. A fost prezentat pentru prima dată sub numele său
        actual în anul 1904 la Clubul Kennel Scoțian, în cadrul unui show de
        profil din Edinburgh. Clubul Englezesc a recunoscut oficial numele
        actual al rasei câțiva ani mai târziu, atunci când Westie a fost
        prezentat la Crufts (cel mai mare show canin). Primul câine înregistrat
        oficial sub denumirea de West Highland White Terrier a fost Sky Lady, o
        femelă născută în Anglia în anul 1906. Primii câini din această rasă au
        ajuns în America în jurul anilor 1905. Recunoașterea rasei de către
        Clubul Kennel American a fost în anul 1908, sub denumirea de Roseneath
        Terrier, fiind plasat în grupa Terrier. Un an mai târziu, rasa Roseneath
        Terrier și-a schimbat numele în West Highland White Terrier, ceea ce a
        nu a mai lăsat loc de confuzii. Până la finalul secolului XX, câinele
        Westie a devenit unul dintre cei mai populari câini de companie din
        lume. Câinele West Highland White Terrier este foarte adaptabil,
        versatil, atletic și un adevărat aventurier neînfricat. Are un nas
        foarte sensibil și un entuziasm crescut atunci când se angajează în
        urmărirea rozătoarelor sau a prăzilor de dimensiuni mici, fie într-un
        mediu natural sau într-unul de competiție. Au fost de asemenea folosiți
        ca și câini de terapie și câini de ajutor, fiind fericiți indiferent
        dacă stau la oraș sau la sat.
      </Para>
      <Para>
        <b>Nume:</b> West Highland White Terrier
      </Para>
      <Para>
        <b>Originea: </b>Scoția
      </Para>
      <Para>
        <b>Grupa:</b> Câini de vânătoare
      </Para>
      <Para>
        <b>Inaltime: </b>Femela 23 – 27 cm, Mascul 26 – 30 cm
      </Para>
      <Para>
        <b>Greutate:</b> Femela 5 – 8 kg, Mascul 6 – 10 kg
      </Para>
      <Para>
        <b>Speranta medie de viata: </b>până la 12 – 16 ani
      </Para>
      <Para>
        <b>Culoare:</b> alb
      </Para>
      <More
        onClick={() => {
          setShowArticles(!showArticles);
        }}
      >
        Afla mai multe despre comportamentul unui Westie
      </More>
      {showArticles ? <DiverseCompSec /> : null}
    </Container>
  );
};
