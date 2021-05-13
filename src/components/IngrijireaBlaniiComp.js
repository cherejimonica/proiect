import React, { useEffect } from "react";
import {
  Container,
  Title,
  Img,
  List,
  List2,
  Li,
  Para,
  Sec1,
  Div,
  Divs,
} from "./IngrijireaBlaniiComp.style";
import Catel3 from "../components/common/img/catel3.jpg";
import Dogg from "../components/common/img/dogg.jpeg";
import Perie from "../components/common/img/perie.jpg";
export const IngrijireaBlaniiComp = () => {
  useEffect(() => {
    document.title = "Ingrijirea blanii";
  });
  return (
    <Container>
      <Title>
        Îngrijirea blănii câinelui: sfaturi pentru toate tipurile de păr
      </Title>
      <Img src={Catel3} />
      <Para style={{ paddingTop: "20px" }}>
        Îngrijit din cap până-n lăbuțe – câinele nu doar că arată bine, ci se și
        simte bine în pielea lui. Mai jos vei găsi sfaturi despre cum să te
        ocupi cu succes de îngrijirea blănii câinelui tău.
      </Para>
      <Sec1>
        <Para style={{ fontWeight: "700" }}>Cuprins</Para>
      </Sec1>
      <List>
        <Li>Îngrijirea blănii câinelui: în funcție de tip</Li>
        <Li>Pieptănatul și periatul ajută în îngrijirea blănii câinelui</Li>
        <Li>
          Cel mai important lucru în îngrijirea blănii câinelui: obișnuiește-l
          cu peria
        </Li>
        <Li>Condiții speciale de îngrijire pentru părul de câine</Li>
        <Li>Când ar trebui să îi fac baie câinelui?</Li>
        <Li>Blană sănătoasă datorită nutriției echilibrate</Li>
      </List>
      <Para style={{ fontWeight: "700" }}>
        Îngrijirea blănii câinelui: în funcție de tip
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Părul de câine nu este întotdeauna la fel. Există mai multe tipuri de
        blană ce se pot întâlni la cele peste 300 de rase de câini. De-a lungul
        secolelor, câinii și-au adaptat blana la diferite condiții. În
        majoritatea cazurilor, ea este formată din stratul exterior și
        substratul izolator (substrat).
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Anumite rase, precum Samoyedul, au un substrat foarte bogat. Alți câini,
        cum ar fi Dalmațienii, au un substrat subțire sau nu au subpăr deloc.
        Îngrijirea blănii câinelui variază în funcție de structura părului.
      </Para>
      <Para style={{ fontWeight: "700", color: "green" }}>
        Câini cu blană dublă – prototipul
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Blana dublă este considerată a fi prototipul blănii de câine deoarece și
        lupul are o astfel de blană. Trăsătura specifică este că pe lângă
        stratul extern, animalul are și un substrat bogat.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Primăvara câinele pierde o mare parte din blană, iar toamna are loc o
        schimbare cu blana mai groasă, de iarnă. În perioadele de schimbare a
        blănii, animalele au nevoie mai des de periere.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Un exemplu de câine cu blană dublă tipică este Ciobănescul German. Însă
        și Labradorul Retriever, Rottweilerul, câinii tip Spitz și toți câinii
        de sanie au această structură a blănii. „Blana dublă scurtă” are o
        lungime de până la patru centimetri. „Blana dublă lungă” poate avea până
        la zece centimetri lungime. Substratul ajunge până la aceeași lungime.
      </Para>
      <Para style={{ fontWeight: "700", color: "green" }}>
        Câinii cu păr scurt: mai puțin timp pentru îngrijirea blănii
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Prin blană scurtă – numită și „mătăsoasă” – se înțelege părul scurt cu
        foarte puțin sau deloc substrat. Având în vedere că blana este formată
        aproape exclusiv din stratul exterior, acești câini lasă păr în decursul
        întregului an, dar în cantități foarte mici. Printre câinii cu păr scurt
        se numără, de exemplu, Boxerul sau Pinscherul.
      </Para>
      <Para style={{ fontWeight: "700", color: "green" }}>
        Părul lung – planifică mai mult timp pentru îngrijirea blănii câinelui
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Numele spune tot: putem recunoaște câinii cu păr lung după lungimea
        blănii acestora. Există două tipuri de câini cu păr lung: cu substrat
        mult și puțin.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Majoritatea câinilor de vânătoare cu păr lung, cum ar fi Irish Red
        Setter, nu prea au substrat. Ei trebuie periați regulat, dar acest lucru
        nu îți va ocupa mult timp.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Dacă patrupezii cu păr lung au și un substrat bogat, planifică-ți de pe
        acum suficient timp pentru îngrijirea lor! Acest tip de blană are
        tendința de a se încâlci. Bobtail sau Terrierul Tibetan se numără
        printre câinii cu o astfel de blană.
      </Para>
      <Para style={{ fontWeight: "700", color: "green" }}>
        Bucle și păr creț
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Cel mai cunoscut reprezentant al „părului creț” este Pudelul, ale cărui
        bucle sunt distribuite pe întregul său corp. Și câinii de apă, cum ar fi
        Barbetul, fac parte din această categorie. Câinii cu păr ondulat au
        mereu blană lungă, care este formată aproape exclusiv dintr-un substrat
        moale, care nu prea cade.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pentru că aceștia nu își schimbă blana, trebuie tunși regulat.
        Îngrijirea urechilor este de asemenea importantă: unii câini cu blana
        ondulată trebuie tunși regulat pentru a le îndepărta părul din canalele
        auditive.
      </Para>
      <Para style={{ fontWeight: "700", color: "green" }}>
        Părul sârmos – blană rezistentă pentru păduri și câmpii
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Blana câinilor cu păr sârmos este dură, rezistentă la apă și deseori
        însoțită de un substrat luxurios. Bracul German cu păr sârmos are
        această caracteristică menționată chiar în numele său. Însă și
        Schnauzerii, Border Terierii și multe alte tipuri de Terrieri au păr
        sârmos. Stratul extern al acestor câini nu cade singur, motiv pentru
        care e nevoie să îi tunzi.
      </Para>
      <Para style={{ fontWeight: "700", color: "green" }}>
        Tipuri rare de blană
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Câinii fără blană, cum ar fi câinele chinezesc cu creastă, nu prea au
        păr, așa că îngrijirea lor este extrem de ușoară. Însă aceștia vor avea
        nevoie de protecție împotriva soarelui în zilele însorite. Câinii cu
        blana tip „corzi”, de exemplu cei din rasa Puli, au într-adevăr un păr
        special. Acesta este format în mare parte din substrat, la fel ca în
        cazul câinilor cu blană ondulată. Datorită structurii groase și moi,
        firele de păr ajunse la câțiva centimetri se grupează într-un fel de
        corzi, oferind o izolare optimă fără să afecteze pielea. Dacă îți
        dorești un astfel de exemplar, consultă un crescător pentru mai multe
        informații despre îngrijirea blănii câinelui.
      </Para>
      <Img src={Dogg} />
      <Para style={{ fontWeight: "700" }}>
        Pieptănatul și periatul ajută în îngrijirea blănii câinelui
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Indiferent că e vorba de păr ondulat, sârmos sau scurt: îngrijirea
        acestuia este benefică pentru orice patruped. Pieptănatul și periatul
        elimină firele de păr moarte și previne încâlcirea. În același timp, ele
        sunt ca un mic masaj care ajută la circulația sângelui. Apropo, acestea
        și întăresc legătura dintre tine și câinele tău.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Însă cât de des ar trebui periat un câine? Câinii cu blană lungă,
        mătăsoasă, cum ar fi Bichonii Havanezi, trebuie periați o dată la 1-2
        zile. Periatul atent al unui Bobtail ar putea să dureze până la o oră și
        nu e nevoie să îl faci mai des de o dată pe săptămână. Profită de
        sesiunile regulate de îngrijire și verifică și ochii și ghearele
        patrupedului.
      </Para>
      <Para style={{ fontWeight: "700", paddingTop: "20px" }}>
        Cel mai important lucru în îngrijirea blănii câinelui: obișnuiește-l cu
        peria
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Cea mai ușoară metodă este să îl obișnuiești să fie periat încă de mic.
        Cel mai bun moment să faci asta este atunci când cățelul este obosit de
        la joacă sau după o plimbare. Alege un loc liniștit și o perie moale
        pentru căței sau o perie cu păr natural. Limitează primele sesiuni de
        îngrijire la una sau două minute și laudă patrupedul la final.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        E important ca el să învețe două lucruri: îngrijirea blănii este un
        ritual plăcut și stăpânul decide când se va opri. Laudă mereu cățelul la
        final și dă-i o gustare dacă a stat nemișcat.
      </Para>
      <Para style={{ fontWeight: "700", paddingTop: "20px" }}>
        Ce perie este potrivită pentru fiecare tip de blană?
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Tipurile de blană scurtă și dublă pot fi îngrijite cu piepteni sau perii
        de masaj. Dacă crezi că Pudelii nu au nevoie de multă îngrijire, te
        înșeli amarnic: și părul lor se poate încâlci! De exemplu, în zona
        axilei sau a posteriorului. Pe lângă un pieptene, te-ar ajuta și o perie
        de îngrijire. Acești câini trebuie și tunși regulat. Periile de
        îngrijire, care îndepărtează firele moarte, sunt perfecte pentru câinii
        cu păr sârmos.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Un lucru valabil pentru toate tipurile de blană: descâlcitorul este o
        ustensilă folositoare dacă observi că blana are tendința de a se
        încâlci. În cazuri mai grave de păr încâlcit cu noduri, va fi nevoie să
        tunzi animalul.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Furminator este o variantă foarte îndrăgită de stăpânii de câini. E
        perfect pentru eliminarea firelor moarte de păr. Există opțiuni
        disponibile atât pentru câini cu păr lung, cât și pentru câini cu păr
        scurt. Însă acestea nu înlocuiesc tunsul și nu sunt potrivite pentru
        câini fără substrat de blană.
      </Para>
      <Div>
        <Img src={Perie} style={{ width: "50%" }} />
        <Divs>
          <Para style={{ fontWeight: "700", color: "green" }}>
            Peria dublă FURminator
          </Para>
          <Para style={{ padding: "20px 0" }}>
            <List2>
              <Li>
                Descâlcește blana, îndepărtează nodurile și părul încâlcit
              </Li>
              <Li>Mâner anti-alunecare, ergonomic</Li>
              <Li>Poate fi folosită atât pe blană umedă, cât și uscată</Li>
            </List2>
          </Para>
        </Divs>
      </Div>
    </Container>
  );
};
