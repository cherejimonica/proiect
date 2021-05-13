import React,{useEffect} from "react";
import {
  Container,
  Img,
  Div,
  Para,
  P,
  D,
  I,
  P2,
  I2,
} from "./DresajClickerComp.style";
import Clicker from "../components/common/img/clicker.jpg";
import Click from "../components/common/img/click.jpg";
export const DresajClickerComp = () => {
  useEffect(() => {
    document.title = "Clicker";
  });
  return (
    <Container>
      <Div>
        <Img src={Clicker} />
        <Para>Avantajele folosirii clickerului in dresaj</Para>
      </Div>
      <D>
        <P>
          Plimbarea cu un caine needucat este un chin atat pentru stapan si
          patruped, cat si pentru celelalte persoane din jur. Dresajul este
          esential pentru cainele din ziua de azi. Pentru ca nu toti stapanii de
          caini isi permit sau isi doresc sa-si trimita cainele la un dresor
          specializat, lectiile de dresaj au loc acasa. Una dintre cele mai
          folosite tehnici de dresaj este utilizarea clickerului. Clickerul este
          eficient si in dresarea altor specii de animale cum ar fi: pisicile,
          caii, delfini etc.
          <P2 style={{ fontWeight: "700" }}>Ce este clickerul?</P2>
          <P2>
            Clickerul este un dispozitiv format dintr-o lamela de metal
            amplasata pe o cutiuta din plastic, cu rol de camera de rezonanta.
            La apasare, lamela metalica produce un sunet scurt si puternic sub
            forma de “click”.
          </P2>
          <P2 style={{ fontWeight: "700" }}>Ce este dresajul cu clickerul?</P2>
          <P2>
            Dresajul cu clickerul este o metoda de recompensare pozitiva a unui
            anumit comportament. Principiul de functionare este simplu: cainele
            executa comanda oferita de noi, moment in care aude “click” si
            primeste o recompensa.
          </P2>
          <P2 style={{ fontWeight: "700" }}>
            Cum functioneaza dresajul cu clickerul?
          </P2>
          <P2>
            Dresajul cu clickerul poate fi inceput la varsta de 8 saptamani sau
            oricand pe parcursul vietii cainelui. Nu exista animal care sa nu
            reactioneze pozitiv la aceasta forma de dresaj.
          </P2>
          <P2>
            Pentru un caine neinitiat clickerul nu inseamna nimic, decat un
            sunet puternic. De aceea la inceput clickerul trebuie asociat cu
            recompensarea.
          </P2>
          <P2>
            Aveti la indemana niste gustari delicioase, usor de mancat, cum ar
            fi bucatele de branza sau carnaciori. Oferiti cainelui recompensa,
            moment in care declansati si clickul. Repetati exercitiul de cateva
            ori pe zi, mai multe zile la rand. Cainele va asocia sunetul
            specific cu recompensa.
          </P2>
          <P2>
            Daca ati apasat clickerul accidental, oferiti recompensa. Nu dorim
            ca patrupedul sa se simta pacalit si sa ii fie inselate asteptarile,
            cel putin nu in cadrul primelor lectii, cand vrem sa introducem
            clickerul.
          </P2>
          <P2>
            Nu lasati copiii sa se joace cu clickerul. Chiar si de la departare,
            din alta camera, sunetul poate fi auzit de caine, care se asteapta
            sa fie recompesat.
          </P2>
          <P2>
            In timp, va fi suficient sa folositi clickerul pentru ca sa
            apreciati o anumita actiune a cainelui. In loc sa il certati, veti
            utiliza clickerul pentru a-i recompensa comportamentul dorit.
          </P2>
          <P2>
            Clickerul se foloseste cu succes si pentru insusirea altor comenzi,
            invatarea de trucuri etc. De aceea recomandam sa prezentati
            clickerul cainelui inainte de a incepe orice forma de dresaj.
          </P2>
        </P>
        <I src={Clicker} />
      </D>
      <D>
        <P>
          <I2 src={Click} />
        </P>
        <P2 style={{ lineHeight: "1.5", paddingTop: "70px" }}>
          In primul rand, clickerul permite consolidarea relatiei dintre caine
          si stapan, prin faptul ca se renunta la orice forma de pedeapsa, in
          schimbul aprecierii comportamentului pozitiv cu clickerul. Cu fiecare
          click, cainele este apropiat si mai mult de stapan.
          <P2 style={{ lineHeight: "1.5" }}>
            Clickerul tine loc de laude verbale. In momentul in care spunem
            “Bravo” cainelui, in functie de starea de spirit, putem avea
            tonalitati diferite. Iar cainii sunt extrem de sensibili la limbajul
            nostru si ii putem induce in eroare. Clickerul in schimb, produce
            aceleasi sunet de fiecare data, care este corect perceput de caine.
            Ba mai mult, sunetul produs de clicker poate fi auzit de la
            departare si poate fi recunoscut usor daca este galagie (razbate
            dintr-o sumedenie de alte sunete).
            <P2 style={{ lineHeight: "1.5" }}>
              Clickerul este un dispozitiv de dimensiuni mici, in consecinta
              poate fi carat oriunde. Astfel nu mai este necesar sa purtati
              mereu la voi o punguta cu recompense.
            </P2>
            <P2 style={{ lineHeight: "1.5" }}>
              Clickerul ajuta stapanul sa comunice cat mai eficient si corect cu
              animalul. Cainele va invata manierele casei, dar si cele din
              societate. Click cu click el va fi mai disciplinat, mai relaxat si
              mi fericit.
            </P2>
          </P2>
        </P2>
      </D>
    </Container>
  );
};
