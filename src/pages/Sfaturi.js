import React from "react";
import { Layout } from "../components/layout";
import SfaturiSec from "../components/SfaturiSec";

const titles = {
  title1:
    "Are câinele loc în locuința dumneavoastră? În casa dumneavoastră? Aveți o grădină ca posibilitate de joacă?",
  title2: "Cine se ocupă de câine atunci când trebuie să lipsiți?",
  title3:
    " Cum stau lucrurile din punct de vedere financiar? Îmi pot permite un câine?",
  title4: "Ați mai avut câine sau sunteți începător în creșterea caninelor?",
  title5: "Câine de talie mică, medie sau mare?",
  title6: "Doriți o femelă sau un mascul?",
  title7: "Pui sau mai degrabă un câine mai mare?",
  title8: "Aveţi copii?",
  title9: "Ce caracter trebuie să aibă câinele?",
  title10:
    "De cât timp dispuneți pentru plimbări? Și cât de pasionat sunteți în acest sens?",
};
const para = {
  para1:
    " Răspunsurile la întrebarea legată de condițiile de locuit oferă informații decisive legate de posibilitatea de a crește corect câinele. Înghesuirea unui câine de talie mare într-o cameră mică nu este de exemplu ideală. Se întâmplă însă din păcate destul de des ca un câine să fie mai întâi cumpărat și apoi să se pună problema spațiului. Dacă locuiți cu chirie, trebuie să vă informați dacă aveți voie să țineți câini în locuință.",
  para2:
    " Aveți prieteni, rude sau vecini în grija cărora puteți lăsa câinele în cazul în care lipsiți perioade mai îndelungate? Și atunci când lucrați la program prelungit trebuie să vă gândiți că acasă câinele este singur și vă așteaptă ore în șir.",
  para3:
    "Costurile de achiziție nu sunt însă singurul efort financiar necesar. Trebuie să luați apoi în calcul vizitele regulate la veterinar, costurile vaccinărilor, hrana, asigurările, accesoriile dedicate, cum ar fi lesele și castroanele, eventualele tarife pentru dresaj etc. ",
  para4:
    "Nu orice rasă, respectiv nu orice câine este potrivit pentru un începător. Când câinele și stăpânul nu se pot „adulmeca”, luptele zilnice pentru putere pot deveni o problemă. Informați-vă de aceea înainte de a cumpăra câinele cu privire la caracterul acestuia și gândiți-vă dacă sunteți compatibili. ",
  para5:
    "În principiu: necesarul de spațiu, costurile și efortul de creștere depind de mărimea câinelui. Cu cât câinele este mai mare, cu atât este și efortul mai mare. Câinii de talie mică au în plus avantajul că pot fi cărați fără probleme în caz de urgență.",
  para6:
    "La multe rase de câini, masculii sunt mai mari și mai grei decât femelele. Pe de altă parte, femelele trec doar de două ori pe an prin călduri. La masculi va trebui să vă împăcați cu ideea că aceștia sunt interesați tot anul de femelele în călduri. Această grijă poate fi uneori extenuantă.",
  para7:
    "Tânăr sau bătrân? Ambele variante au avantaje şi dezavantaje. Un pui de câine se obișnuiește rapid cu dumneavoastră, având în vedere că sunteți primul său stăpân. Cu un câine mai mare trebuie să aveți răbdare. Aceștia au deja experiență cu oamenii, și poate nu întotdeauna una pozitivă. Oricum, un câine mai mare necesită un timp mai scurt sau mai lung pentru a se obișnui cu dumneavoastră.",
  para8:
    "O familie cu copii nu trebuie să se decidă sub nicio formă asupra unei rase de câini cu tendințe spre agresivitate. Un câine perfect adaptat copiilor nu există. Multe rase de câini - mops, beagle, TerraNova sau labrador - se pretează însă mai degrabă ca altele ca prieteni de joacă pentru copii. Chow-Chow se fixează de exemplu predominant pe o singură persoană, ceea ce poate fi dezamăgitor pentru copii.",
  para9:
    "Câine de pază atent sau câne de joacă prietenos? Există câini care sunt relaxați la contactul cu străinii, cum ar fi de exemplu un labrador retriever. Alți câini se comportă mai degrabă rezervat și sunt chiar neîncrezători. Sunteți compatibil cu un câine care țopăie toată ziua în jurul dumneavoastră plin de temperament? Sau vă doriți un companion mai degrabă liniștit? Informați-vă despre diferitele caractere ale raselor de câini și gândiți-vă care vi se potrivește mai bine dumneavoastră și mediului de viață propriu.",
  para10:
    "Mulți câini vor să facă excursii de kilometri întregi. Necesarul de mișcare variază de la o rasă la alta, respectiv de la un câine la altul. Un câine din rasa West Highland White Terrier trebuie să alerge între 1,5 și doi kilometri zilnic. Un dodge în schimb are nevoie de circa nouă kilometri pe zi, iar un câine de vânătoare irlandez este fericit dacă poate alerga până la paisprezece kilometri zilnic. Rasa chihuahua are un necesar de mișcare relativ redus. Pasiunea dumneavoastră pentru drumeții și condiția fizică trebuie adaptate la cele ale câinelui.",
};

const items = [
  <SfaturiSec.Item title={titles.title1}>
    <p>{para.para1}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title2}>
    <p>{para.para2}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title3}>
    <p>{para.para3}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title4}>
    <p>{para.para4}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title5}>
    <p>{para.para5}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title6}>
    <p>{para.para6}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title7}>
    <p>{para.para7}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title8}>
    <p>{para.para8}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title9}>
    <p>{para.para9}</p>
  </SfaturiSec.Item>,
  <SfaturiSec.Item title={titles.title10}>
    <p>{para.para10}</p>
  </SfaturiSec.Item>,
];

export default function Sfaturi() {
  return (
    <div>
      <Layout>
        <SfaturiSec items={items} />
      </Layout>
    </div>
  );
}
