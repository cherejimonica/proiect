import React from "react";
import { Container, Img, Para, Title, List, Li } from "./DiverseCompSec.style";
import Agresiv from "../common/img/agresivitate.jpg";
import Timid from "../common/img/timiditate.jpg";
import Interact from "../common/img/interactiune.jpg";
import Hiper from "../common/img/hiperactiv.jpg";
import Latrat from "../common/img/latrat.jpg";
import Stimul from "../common/img/stimul.jpg";
export const DiverseCompSec = () => {
  const titles = [
    "Probleme comportamentale – Agresivitatea",
    "Probleme comportamentale – Timiditatea",
    "Interacţiunea cu un westie",
    "Hiperactivitatea unui Westie",
    "Latratul unui Westie (partea a2a)",
    "Stimularea unui Westie (partea a2a)",
  ];
  const images = [Agresiv, Timid, Interact, Hiper, Latrat, Stimul];
  return (
    <Container>
      <Title>{titles[0]}</Title>
      <Img src={images[0]} />
      <Para>
        West Highland White Terrier-ul (Westie) este un câine energic şi sigur
        pe el, în comparaţie cu alţi câini. De obicei, West Highland White
        Terrier-ul nu este el cel care provoacă conflictele cu alţi câini, deşi
        unii masculi sunt mai agresivi, în special cu alţi masculi.
      </Para>
      <Para>
        Câinii pot dezvolta comportamente nepotrivite în cazul în care nu
        primesc o educaţie solidă de la stăpânii lor. Dominarea este o atitudine
        importantă şi naturală în viaţa câinilor. În cazul în care stăpânul nu
        controlează comportamentul animalului de companie acesta va prelua
        sarcina de a domina.
      </Para>
      <Para>
        În cazul în care observi la câinele tău semne de comportament agresiv
        este necesar să îl ţii sub control şi sub supraveghere permanentă. Fii
        atent la:
      </Para>
      <Para>
        <List>
          <Li> poziţie a corpului înaltă, urechile ridicate </Li>
          <Li> privirea fixă şi susţinerea contactului vizual </Li>
          <Li>mârâitul</Li>
          <Li>ameninţarea prin arătatul dinţilor</Li>
          <Li>marcarea excesivă a teritoriului</Li>
          <Li>posesivitatea asupra unei zone, piese de mobilier, obiect</Li>
        </List>
      </Para>
      <Para>
        Agresivitatea poate să apară din mai multe cauze. Înţelege ce se
        întâmplă în mintea căţelului şi încearcă să corectezi:
      </Para>
      <Para>
        <List>
          <Li>
            Agresivitatea de dominare – cel mai des întâlnită. Apare atunci când
            câinele vrea să corecteze comportamentul celor din jur. Cel mai
            adesea câinele e posesiv şi starea de agresivitate se declanşează
            când îi este încălcat teritoriul: îi e atinsă mancarea, jucaria,
            locul, se apropie un câine/om necunoscut.
          </Li>
          <Li>
            Agresivitatea de frică. Apare atunci când câinelui îi este frică, se
            sperie şi nu ştie cum să reacţioneze. De obicei, câinele este pasiv
            şi timid, încearcă să evite interacţiunea, însa devine agresiv
            atunci când nu găseşte scăpare din situaţia care i-a cauzat starea.
          </Li>
          <Li>
            Agresivitatea maternă. Apare atunci când mama este excesiv de
            protectoare şi devine agresivă cu persoanele pe care le considera o
            ameninţare pentru puii ei.
          </Li>
          <Li>
            Agresivitatea cauzată de durere. Acest tip de agresiune este de fapt
            o formă de auto-protejare a câinelui aflat în suferinţă, la care se
            adaugă stresul.
          </Li>
          <Li>
            Agresivitatea protectivă/teritorială. Apare atunci când câinele işi
            protejează stăpânul de alte persoane sau animale.
          </Li>
        </List>
      </Para>
      <Para style={{ fontWeight: "700" }}>Educarea câinelui</Para>
      <Para>
        Dacă observi anumite semne că începe să dezvolte un comportament
        agresiv, încearcă să corectezi prompt de fiecare dată. Nu accepta nicio
        încălcare a limitei impuse de tine. Alftel, va încerca de fiecare dată
        să o încalce tot mai mult, să se impună, transformându-se într-un câine
        dominant.
      </Para>
      <Para>
        Pentru a evita comportamentul agresiv al câinelui şi, mai ales,
        întâmplări nefericite faţă de alte persoane/câini, este necesar ca
        animalul de companie sa urmeze lecţii de dresaj.
      </Para>
      <Para>
        Socializarea şi dresajul sunt cele mai comune metode pentru tratarea
        unui câine agresiv. Cel mai indicat este însă ca dresajul să înceapă de
        la vârste cât mai fragede, astfel încât animalul să fie obişnuit cu
        diferite situaţii. Un câine educat va fi un câine socializat, echilibrat
        şi ascultător făcând astfel relaţia câine-stăpân o relaţie de prietenie,
        exact ce căutai când te-ai gândit să aduci în viaţa ta un mic patruped.
      </Para>
      <Title>{titles[1]}</Title>
      <Img src={Timid} />
      <Para>
        Deşi sunt nişte bulgări de fericire, şi micuţii terrieri au uneori
        probleme de comportament. Multe sunt cauzate de greşelile neintenţionate
        ale stăpânilor, de încăpăţânarea specifică rasei, sau chiar de curajul
        inconştient care îi defineşte.
      </Para>
      <Para>
        Westie este, în mod caracteristic, un câine inteligent, bine-crescut cu
        bune maniere. Rasa este veselă, iubitoare şi foarte jucăuşă, nişte
        căţeluşi toată viaţa.
      </Para>
      <Para>
        Deşi nu le este caracteristic, există şi cazuri de Westie timizi.
        Timiditatea la câini se poate manifesta printr-un disconfort în
        situaţiile noi cu care se confruntă, până la atacuri complete de panică,
        în urma cărora, uneori, câinii pot muşca.
      </Para>
      <Para style={{ fontWeight: "700" }}>
        Indicii pe care corpul unui câine îi afişează atunci când este anxios:
      </Para>
      <Para>
        <List>
          <Li>răsucirea urechilor pe spate</Li>
          <Li>tendinţa de a-şi ghemui corpul</Li>
          <Li>respiraţie rapidă ca după efort</Li>
          <Li>strângerea cozii între picioare</Li>
          <Li>accesele de scuturături necontrolate</Li>
          <Li>lătratul ascuţit</Li>
          <Li>evitarea privirii directe</Li>
        </List>
      </Para>
      <Title>Interacţiunea cu un westie</Title>
      <Img src={images[2]} />
      <Para>
        Modul în care interacţionezi cu un câine te poate face persoana lui
        preferată sau omul pe care încearcă să-l evite. Fie că îţi mângâi
        propriul câine sau unul pe care abia l-ai cunoscut, există unele
        strategii pentru o interacţiune mai bună.
      </Para>
      <Para style={{ fontWeight: "700" }}>Începe cu dreptul</Para>
      <Para>
        Prima regulă e să nu forţezi interacţiunea cu un câine care nu iniţiază
        contactul. Atenţie la copii, care de obicei se repezesc spre câine.
        Acesta va căuta un mod să scape, prin fuga, mârâit.
      </Para>
      <Para>
        <List>
          <Li>
            Invită-l să facă primul contact, apropie-te de nivelul lui
            (apleacă-te).
          </Li>
          <Li>
            Dacă ai de a face cu un câine încrezător, fă-l curios, va veni
            singur.
          </Li>
          <Li>
            Evită să îl copleşeşti cu înălţimea ta (stând deasupra lui), poate
            fi percepută ca o amenințare.
          </Li>
        </List>
      </Para>
      <Para>
        Cu un câine rezervat sau fricos, nu iniţia un contact frontal.
        Întoarce-ţi corpul într-o parte pentru a fi mai puțin amenințător.
        Atenţie şi la contactul vizual prelungit.
      </Para>
      <Para>
        Permite câinelui să se apropie primul. Ignoră-l în primele momente până
        când se simte în siguranță.
      </Para>
      <Para style={{ fontWeight: "700" }}>Pregăteşte-te, pregăteste-l</Para>
      <Para>
        Un câine prietenos se va apropia cu urechile lăsate pe spate și dând din
        coadă. Când câinele te miroase, strânge informații despre tine, nu te
        invită neaparat să-l mângâi. Dacă păstrează distanţa şi e alert sau
        nervos, nu e cazul să insişti. Dacă se apropie relaxat, curios, atent,
        sau dacă inițiază un scurt contact vizual, cel mai probabil indică
        prietenie și o dorință de interacțiune.
      </Para>
      <Para>
        Odată ce v-aţi apropiat, mângâie-l încet în zonele în care acceptă să
        fie atins. În cazul în care câinele încearcă să se îndepărteze, sau
        prezintă semne de disconfort (cum ar fi linsul pe bot, aplecarea
        capului) lasă-l să se liniştească.
      </Para>
      <Para style={{ fontWeight: "700" }}>
        Cele mai bune locuri de mângâiat
      </Para>
      <Para>
        Cei mai mulți câini acceptă să fie mângâiaţi pe piept, umeri și baza
        gâtului. Fiecare câine are locuri preferate în care le place să fie
        răsfățaţi cu mângâieri, dar şi zone comune: la baza cozii, pe burtă, sub
        bărbie sau pe gât.
      </Para>
      <Para>
        Mângâie-l lent, similar unui masaj blând, în direcţia de creştere a
        blăniţei, îl va ajuta să se liniştească. Mângâiatul ar trebui să fie
        calmant și terapeutic, atât pentru câine cât și pentru om. Ar trebui
        să-i facă plăcere şi să ceară întotdeauna mai mult. Măngăiatul ar trebui
        să fie privit şi de om, şi de câine ca o recompensă.
      </Para>
      <Para style={{ fontWeight: "700" }}>Evită:</Para>
      <Para>
        <List>
          <Li>să-i acoperi ochii</Li>
          <Li>să-l mângâi pe cap, pe bot, pe urechi, pe labe sau coadă</Li>
          <Li>să-l agiţi cu atingeri haotice, rapide şi apăsate</Li>
          <Li>să-l imobilizezi</Li>
          <Li>să-i vorbeşti tare şi agitat de aproape</Li>
          <Li>să mângâi un câine legat sau închis în cuşcă</Li>
        </List>
      </Para>
      <Para style={{ fontWeight: "700" }}>Întotdeauna:</Para>
      <Para>
        <List>
          <Li>întreabă stăpânul înainte de a mângâia câinele</Li>
          <Li>supraveghează copiii în preajma câinilor</Li>
        </List>
      </Para>
      <Title>Hiperactivitatea unui Westie</Title>
      <Img src={images[3]} />
      <Para>
        Hiperactivitate este o problemă cu multe cauze și soluții posibile.
        Există unele tehnici simple pe care le poți încerca pentru a calma
        câinele zgomotos:
      </Para>
      <Para style={{ fontWeight: "700" }}>Ignoră comportamentul!</Para>
      <Para>
        Câinii îţi caută şi îţi cer atenţia. Dacă le-o oferi în timpul
        izbucnirilor, îl aprobi fără să vrei, sau poate fără să-ţi dai seama.
        Astfel întreţii comportamentul pe care vrei să-l elimini. Data viitoare
        când câinele tău sare, se agită, latră într-un mod supraexcitat,
        încearcă sa nu-l atingi, nu-i vorbi, nu te uita la el şi vezi cum
        reacţionează. Vei fi surprins de cât de repede se va linişti.
      </Para>
      <Para style={{ fontWeight: "700" }}>Dă-i câinelui o sarcină!</Para>
      <Para>
        Având o sarcină pe care să se concentreze te poate ajuta foarte mult.
        Hiperactivitate poate proveni de la nevoile psihologice la fel de ușor
        cum poate proveni de la nevoile fizice. Prin acordarea unei sarcini, îl
        scoţi din starea lui de hiperactivitate și îi redirecționezi energia în
        altă parte. Sarcina ar trebui să aibă un început şi un sfârşit clar
        pentru câine, și nu ar trebui să fie considerată un înlocuitor pentru
        exerciţile fizice necesare. Vezi aici şi aici metode de stimulare, chiar
        şi în casă.
      </Para>
      <Para style={{ fontWeight: "700" }}>Scoate-l la plimbare!</Para>
      <Para>
        Dacă a acumulat multă energie, o plimbare este un alt mod excelent de
        a-i opri agitaţia. Redirecţionează-i atenţia în direcţia în care doreşti
        să mergi. Corectează-l şi nu ii permite să tragă în lesă. După plimbare,
        după ce s-a liniştit, poţi să-l laşi să se joace cu alţi câini, să
        exploreze liber (de preferat într-un spaţiu amenajat din care nu poate
        evada), sau te poţi juca cu el.
      </Para>
      <Para>
        Nu-l lasa într-un grup de câini până nu e liniştit şi până nu ascultă
        comenzile tale. S-ar putea ca ceilalţi câini să nu aprecieze surplusul
        de energie şi să încerce să-l corecteze.
      </Para>
      <Para style={{ fontWeight: "700" }}>Învaţă-l să aştepte!</Para>
      <Para>
        Comanda Așteaptă este utilă pentru a controla impulsurile pe scurtă
        durată. E folositor în multe situaţii şi poţi încerca:
      </Para>
      <Para>
        – Așteptă pentru mâncare: Îi pui mâncarea în faţă doar când e calm şi
        când poți plasa cu ușurință vasul pe podea și el nu se mișcă până când
        i-ai dat permisiunea. Insişti şi nu renunţi.
      </Para>
      <Para>
        – Așteptă la ușă: E foarte folositor. Câinele nu trebuie să iasă
        niciodată în fugă din casă, din curte, din maşină, din cuşca de
        transport. De asemenea nu trebuie să iasă niciodată înaintea ta.
      </Para>
      <Para>
        – Aşteaptă pentru jucărie: Îl pui să stea in Şezi pentru câteva secunde
        înainte de a-i arunca jucăria.
      </Para>
      <Para style={{ fontWeight: "700" }}>Verifică-ţi propria energie!</Para>
      <Para>
        Cainele tău este oglinda ta. Orice energie proiectezi se va reflecta
        înapoi. Ești calm şi liniştit? Ești sigur pe tine şi hotărât? Ești
        stresat şi nervos? Eşti agitat şi gălăgios? Stările de nervozitate sau
        anxietate sunt uşor transmise prin limbajul trupului, sau prin tonul
        vocii. La fel şi agitaţia. La fel şi calmul. Câinele tău a învăţat să
        citească toate semnalele și să răspundă la ele. Tot comportamentul tău
        îl afectează.
      </Para>
      <Para>
        Folosind o combinaţie de exerciţii, antrenament și comenzi poţi păstra
        starea de echilibru şi calm a câinelui tău şi îi poţi asigura viitorul
        fericit în familia ta. Dacă nu te descurci singur, cere ajutorul unui
        dresor profesionist. Un câine echilibrat e un câine fericit.
      </Para>
      <Title>Latratul unui Westie</Title>
      <Img src={images[4]} />
      <Para>
        Câinii latră ca o formă de comunicare în cazul în care există un motiv.
        Acesta poate fi pur și simplu o reacție la un stimul (în acest caz
        anunţându-te) sau ar putea fi modalitatea câinelui tău de a cere ajutor
        sau de a trimite un semnal de primejdie. Ai nevoie sa descifrezi de ce
        latră câinele, în scopul de a-l opri.
      </Para>
      <Para>
        Undeva nevoile sale nu sunt îndeplinite. Este un câine calm, agresiv,
        fricos, anxios? Este stimulat suficient atât fizic cât şi mental? Are o
        viață echilibrată? Dacă lătratul este o problemă, luați în considerare
        aceste aspecte pentru a găsi o soluție. Stimularea este cel mai bun mod
        de a-i arăta dragostea adevărată câinelui tău.
      </Para>
      <Para style={{ fontWeight: "700" }}>Latră la întâmpinare?</Para>
      <Para>
        Când ajungi acasă cum te întâmpină? Agitat, sărind și lătrând? Acesta nu
        este un comportament care dovedește dragostea câinelui pentru familie.
        Într-un cadru natural, câinii nu latră şi nu sar pe membrii haitei din
        care face parte într-o izbucnire de afecțiune. Căinii care îşi salută
        proprietarii în acest mod încearcă să comunice. Încearcă să-ți spună că
        e singur sau plictisit, sau nevoile nu i-au fost îndeplinite.
      </Para>
      <Para>
        Agitaţia este modalitatea câinelui tău de a arde excesul de energie
        acumulat pe tot parcursul zilei. Dacă iubeşti un câine trebuie să-l
        tratezi ca pe un animal, ceea ce înseamnă că-i îndeplineşti nevoile
        naturale, stimulându-l fizic prin plimbări şi stimulându-i simţurile în
        ordinea: nas, ochi, urechi.
      </Para>
      <Para style={{ fontWeight: "700" }}>
        Nu uita: Stimulare fizică şi psihică, Disciplină, apoi Afecţiune!
      </Para>
      <Para>
        Există multe modalități de a înmulţi provocările din viața câinelui tau.
        Găseşte o modalitate prin care să vă bucurați împreună şi câinele poate
        participa în condiții de siguranță.
      </Para>
      <Para style={{ fontWeight: "700" }}>
        Sfaturi pentu a descuraja un lătrat supărător:
      </Para>
      <Para>
        Aminteşte-ţi, lătratul este natural! Este un mijloc important de
        comunicare pentru câini. Dar uneori lătratul se poate dezvolta într-o
        problemă când devine de necontrolat. Trebuie oprit. Nici câinelui nu-i
        face bine să rămână blocat în starea de agitaţie. Ca lider, e treaba ta
        să intervii și să controlezi lătratul excesiv.
      </Para>
      <Para>
        Corectează și atrage-i atenţia! Opreşte-l din lătrat cu o privire, un
        sunet, sau o corecție fizică. Câinele se va opri și îşi va relua
        activitatea. Trupul său e relaxat, dar creierul e încă în stare de
        alertă. Fii răbdător. Așteaptă până când câinele renunţă complet înainte
        de a renunţa la corecţie.
      </Para>
      <Para>
        Asigură-te că eşti calm! Lătratul poate fi iritant, dar nu vei fi
        capabil să-l corectezi dacă nu eşti ferm şi calm. Câinele va reflecta
        energia ta. Dacă esti frustrat, nervos, neliniştit, agitat, gălăgios şi
        câinele va fi la fel!
      </Para>
      <Para>
        Dacă e cazul, obține ajutorul unui profesionist. Când a intrat în viața
        ta ai făcut un angajament pentru a-i oferi îngrijirea de care are
        nevoie. Apelează la un dresor profesionist care să-l ajute să rezolve
        orice problemă de comportament.
      </Para>
      <Para>
        Nu uita: Numai atunci când e echilibrat vei avea parte de toată
        dragostea câinelui tău, şi doar aşa vă puteţi bucura unul de celălalt.
      </Para>
      <Title>Stimularea unui Westie</Title>
      <Img src={images[5]} />
      <Para>
        La fel ca şi oamenii, câinii se plictisesc de aceeași rutină de zi cu
        zi. Menținându-i activi mental în mod constant expunându-i la lucruri
        noi este la fel de important ca și plimbarea zilnică. Câinii plictisiţi
        dezvoltă comportamente distructive.
      </Para>
      <Para style={{ fontWeight: "700" }}>
        Iată câteva modalități de a stimula mintea cainelui, astfel încât
        acestea să nu se plictisească:
      </Para>
      <Para style={{ fontWeight: "700" }}>
        1. Învaţă-l un nou truc/comandă/joc
      </Para>
      <Para>
        De fiecare dată când începi o sesiune de învăţare, îi oferi o provocare
        mentală. Caută mereu trucuri şi comenzi noi pentru a-l antrena. Dacă
        sunteți pregătiţi pentru a trece dincolo de comenzile de bază, poţi
        folosi caracterul animalului pentru a intui ce jocuri i s-ar potrivi. Un
        câine astfel provocat va avea un temperament calm. Provocarea mentală îl
        face mult mai puțin anxios, în general, și va deveni mai relaxat în
        preajma altor câini
      </Para>
      <Para style={{ fontWeight: "700" }}>
        2. Achiziţionează jocuri interactive sau jucării pentru câinele tău
      </Para>
      <Para>
        Se găsesc pe piaţa o serie largă de jucării, de la cele de pluş, de
        cauciuc, la cele care scot sunete, la mingi, până la jucăriile
        ’inteligente’. Jucăriile inteligente stimulează câinele, îi ţin mintea
        ocupată. Am rămas surprinsă când o jucărie a ţinut ocupat un pui de
        westie mai mult de o oră. Înainte de a achiziţiona o jucarie sa fiţi
        atenţi la material, la bucaţi mici ce pot fi inghiţite. Deşi sunt
        jucării special create pentru câini, am avut surpriza ca un pui cu dinţi
        de lapte să reuşească se le strice la prima joacă. Nu numai ca le-a
        stricat, dar a şi inghiţit bucăţele de plastic, pe care le-a eliminat în
        mod natural.
      </Para>
      <Para>
        Nu-l lăsa să se plictisescă de jucării. Câinele nu va avea acelaşi
        apetit pentru aceleaşi jucării. Dă-i o jucărie să se joace câteva zile
        și când se va plictisi de ea, înlocuieşte-o. Oferă-i jucării noi şi
        oferă-i prin rotaţie câte o jucărie din colecţia de jucării vechi.
      </Para>
      <Para style={{ fontWeight: "700" }}>3. Scoate-l în lume</Para>
      <Para>
        Ia-l cu tine peste tot, expune-l la cât mai multe mirosuri, sunete,
        locuri. Lasă-l sa exploreze cu toate simţurile. Astfel nu se va mai
        speria la fel de uşor, nu va dezvolta un comportament anxios, va fi mai
        prietenos şi mai fericit.
      </Para>
      <Para style={{ fontWeight: "700" }}>
        4. Fă-i cunoştinţă cu cât mai multe feţe noi
      </Para>
      <Para>
        De fiecare dată când câinele întâlneşte o persoană sau un câine nou,
        intră în contact cu o serie de imagini, sunete și mirosuri, toate noi.
        Nu te speria de câinii mari pentru că îi transmiţi anxietatea şi
        câinelui. Cu toate că westie-ul e un câine mic, face faţă unui câine de
        talie mare. Chiar dacă se sperie la început trebuie încurajat să nu
        fugă, să nu renunţe. Va învăţa în cele din urmă ca nu se întâmplă nimic
        dacă se apropie un câine mare şi prietenos. Desigur, este
        responsabilitatea stăpânului să nu îl pună în situaţii limită, cu câini
        agresivi şi locuri periculoase.
      </Para>
      <Para style={{ fontWeight: "700" }}>
        5. Dă-i câinelui o treabă de făcut
      </Para>
      <Para>
        Câinii sunt crescuţi pentru un scop. Westie-ul este un terrier care la
        origini a fost utilizat la vânarea bursucilor, vulpilor, etc. Aceşti
        căini au fost, de asemenea, utilizaţi la distrugerea cuiburilor de
        şoareci. Puteţi crea jocuri care să-i stimuleze instinctele de vânător
        şi dacă aveţi posibilitatea, să sape în pamânt (trebuie avut în vedere
        însă că după ce învaţă să sape va fi foarte greu să-l dezobişnuiţi). Un
        westie, poate la fel de bine să ’vâneze’ o jucărie legată de un şnur, şi
        să ’sape’ într-un prosop pentru a găsi o recompensă.
      </Para>
      <Para>
        <b>Concluzia</b> e că un westie, deşi e un câine mic, alb şi foarte
        frumos, nu e o jucărie, e un câine cu instincte şi simţuri foarte bine
        dezvoltate. Pentru a-l menţine sănătos şi fericit trebuie să-l stimulezi
        cât de mult posibil, să-i menţii toate simţurile active, să-l soliciţi
        atât fizic, cât şi mental.
      </Para>
    </Container>
  );
};
