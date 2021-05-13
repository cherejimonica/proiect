import React,{useEffect} from "react";
import {
  Container,
  Img,
  Para,
  Div,
  D,
  P,
  I,
  P2,
  P3,
} from "./DresajLesaComp.style";
import Leash from "../components/common/img/leash.jpg";
export const DresajLesaComp = () => {
  useEffect(() => {
    document.title = "Lesa";
  });
  return (
    <Container>
      <Div>
        <Img src={Leash} />
        <Para>Este zgarda electrica eficienta in dresajul cainilor?</Para>
      </Div>
      <P>
        Raspunsul pe scurt la aceasta intrebare este da. Fara indoiala, aceste
        instrumente sunt eficiente ca si instrumente ajutatoare in procesul de
        dresaj al unui caine. Acestea fac animalul sa fie mai atent in timpul
        dresajului si reprezinta, totodata, o armatura negativa care ajuta
        animalul sa inteleaga care sunt comportamentele indezirabile. Totusi, ca
        mai toate lucrurile, trebuie sa tineti cont de mai multe variabile decat
        de beneficiul initial. In acest articol, vom discuta despre diferitele
        beneficii si probleme intalnite in folosirea acestui dispozitiv.
      </P>
      <P style={{ paddingTop: "30px" }}>
        Sa discutam, mai intai, despre cum fuctioneaza acest dispozitiv. Zgarda
        electrica este, practic, un receptor care, atunci cand este pornit,
        elibereaza un stimul electric in jurul gatului cainelui, prin doua sonde
        care intra in contact cu pielea. Receptorul este controlat printr-o
        telecomanda cu transmitator care are o arie efectiva de pana la o mila
        pentru unele modele. In primele stadii ale dresajului, incarcatura este
        destul de mica, pana cand animalul invata ca un comportament corect
        poate opri acest tip de stimulare.
      </P>
      <D>
        <I src={Leash} />
        <P2>
          O data ce animalul a invatat cum functioneaza zgarda, acest dispozitiv
          nu mai este folosit constant, ci extrem de rara, chiar de loc, daca nu
          mai este cazul. Acest tip de zgarda este folosit doar pentru a
          dezobisnui cainele de obiceiurile incorecte, prin transmiterea unui
          mesaj clar si consistent. Acum ca am inteles modul in care aceste
          dispozitive funcioneaza, sa analizam cateva momente despre care ar fi
          motivele care sa ne indreptateasca sa le folosim si daca sunt
          eficiente sau nu.
          <P3>
            Motivul cel mai evident pentru folosirea unei zgarzi electrice il
            reprezinta capacitatea de a controla cainele de la mare distanta
            fara sa fie nevoie sa tipati la el sau sa folositi metode care
            produc sunete inalte, metoda eficienta in special pentru animalele
            care stau pe langa turme sau in medii in care excesul de zgomot nu
            este acceptat, precum terenurile de vanatoare.{" "}
          </P3>
          <P3>
            Acest control pe distanta mare are si avantajul de a va ajuta sa va
            mentineti o pozitie non-amenintatoare fata de caine, zgarda fiind
            cea care stabileste regulile, dumneavoastra nefiind nevoit sa il
            intimidati fizic pentru a il corecta.
          </P3>
          <P3>
            Pe de alta parte, acest lucru poate constitui si un dezavantaj. Cum?
            Datorita faptului ca, de la o anumita distanta, exista riscul ca
            animalul sa iasa din raza de actiune a dispozitivului, pentru a
            scapa de stimulul electric. Exista astfel posibilitatea sa pierdeti
            cainele. Un alt dezavantaj este acela ca o astfel de zgarda
            electrica are un pret destul de prohibitiv, nefiind la indemana
            oricui. Acest aspect trebuie luat in considerare atunci cand va
            calculati costurile de intretinere a unui caine.{" "}
          </P3>
          <P3>
            Un avantaj ar fi accelerarea rate de progres a dresajului pentru
            comportamente specifice. Multi proprietari pretind ca au redus
            timpul de dresaj la jumatate cu ajutorul unei zgarde electrice.
            Acest amanunt este suficient pentru unii proprietari de caini pentru
            a-i face sa ia in considerare acest instrument.
          </P3>
          <P3>
            Totusi, mai exista un dezavantaj, poate cel mai important dintre
            toate si cel mai demn de luat in calcul, primordial fata de toate
            celelalte avantaje si dezavantaje. Pana la urma, principiul de baza
            dinspatele acestui dispozitiv este ca el cauzeaza o masura de durere
            asupra animalului de companie.
          </P3>
        </P2>
      </D>
    </Container>
  );
};
