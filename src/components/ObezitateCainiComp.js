import React, { useEffect } from "react";
import { Container, Title, Para, Img, Sec1 } from "./ObezitateCainiComp.style";
import Catel1 from "./common/img/catel1.jpeg";
import H1 from "./common/img/h1.jpg";
import Weight from "./common/img/weight.jpg";
import Dog2 from "./common/img/dog2.jpeg";
import ReactPlayer from "react-player";
export const ObezitateCainiComp = () => {
  useEffect(() => {
    document.title = "Obezitate caini";
  });
  return (
    <Container>
      <Title>
        Ce pot face dacă am un câine obez? Obezitatea la câini: cauze și urmări
      </Title>
      <Img src={Catel1} />
      <Para>
        Supraponderabilitatea este o problemă majoră de sănătate pentru câini.
        Oricât de simpatic ți-ar părea când este “pufos”, un câine obez suferă.
        Nu doar că este afectată semnificativ calitatea vieții și speranța lor
        de viață, ci crește și riscul de probleme cardiace, diabet sau dureri
        ale articulațiilor. Află aici cum să îți dai seama dacă patrupedul tău
        este supraponderal.
      </Para>
      <Sec1>
        <Para style={{ fontWeight: "700" }}>Cuprins</Para>
      </Sec1>
      <Para>1. Ce înseamnă un câine obez? </Para>
      <Para>2. Cum îmi dau seama dacă patrupedul este prea gras? </Para>
      <Para>3. Cum ajunge câinele să fie supraponderal? </Para>
      <Para>4. Poate deveni un câine obez din cauza unei boli? </Para>
      <Para>5. Starea de sănătate a unui câine obez: consecințe</Para>
      <Para
        style={{ fontWeight: "700", paddingTop: "20px", paddingBottom: "20px" }}
      >
        1. Ce înseamnă un câine obez?
      </Para>
      <Para>
        De cele mai multe ori, greutatea ideală este judecată conform
        standardului rasei. Acest lucru nu este mereu posibil, mai ales în cazul
        metișilor. Pentru ei putem folosi drept referință greutatea corpului la
        finalul primului an de viață.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Dacă greutatea corpului este cu 5 până la 20% mai mare decât greutatea
        ideală, acest lucru se numește supraponderabilitate. Câinele suferă de
        obezitate dacă are cu 20% peste greutatea normală.
      </Para>
      <Img src={H1} />
      <Para
        style={{ fontWeight: "700", paddingTop: "20px", paddingBottom: "20px" }}
      >
        2. Cum îmi dau seama dacă patrupedul este prea gras?
      </Para>
      <Para>
        În primul rând încearcă să cântărești câinele regulat. Dacă observi o
        valoare tot mai mare pe cântar de fiecare dată, cel mai probabil
        patrupedul se îngrașă pas cu pas. Singurele excepții sunt câinii în
        creștere.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Cea mai comună – și probabil cea mai obiectivă – metodă de evaluare este
        Body Condition Score (BCS – index corporal). Acesta se bazează pe
        evaluarea vizuală și palparea grăsimii de pe piept, talie și coloana
        vertebrală. În funcție de concluzii, poți clasifica apoi câinele
        într-una dintre cele nouă clase BCS.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        În general, câinele este considerat prea gras atunci când nu îi simți
        coastele la palpare și nu se mai vede linia taliei. Când privești
        câinele din lateral ar trebui să vezi linia inferioară a abdomenului cum
        urcă de la coaste spre șolduri și nu (aproape) paralel cu podeaua.
        Depozitele de grăsime de la baza cozii sunt un alt semn de
        supraponderabilitate la câini.
      </Para>
      <Img
        src={Weight}
        style={{ width: "50%", margin: "0 auto", paddingTop: "20px" }}
      />
      <Para
        style={{ fontWeight: "700", paddingTop: "20px", paddingBottom: "20px" }}
      >
        3. Cum ajunge câinele să fie supraponderal?
      </Para>
      <Para>
        Deseori, drumul către obezitate începe când patrupedul este încă mic. Un
        regim prea bogat în calorii în primul an de viață cauzează formarea mai
        multor celule adipoase decât va avea un câine hrănit corect. Nu poți
        schimba acest număr ulterior, așa că riscul de obezitate ca adult este
        mai mare.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Bineînțeles că aceasta nu este singurul motiv pentru care se îngrașă un
        câine.
      </Para>
      <Para>
        Cea mai comună cauză a kilogramelor în plus o reprezintă aportul prea
        mare de calorii din mâncare. Acest exces poate fi compensat cu
        dificultate prin exerciții fizice, pentru că patrupedul folosește doar
        circa 10% din energia sa zilnică pentru mișcare.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Posibilele cauze ale excesului de calorii o reprezintă deseori prea
        multă mâncare, accesul nelimitat la hrană sau valoare energetică prea
        mare per porție de mâncare.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Din păcate, unii stăpâni uită că gustările conțin și ele multe calorii
        și trebuie incluse în calculul necesarului caloric zilnic. Recompensa
        bine intenționată dată seara târziu poate duce la kilograme în plus pe
        termen lung.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        De aceea, stăpânii de câini trebuie să țină cont mereu de mărimea
        patrupedului. De exemplu, pentru un câine care cântărește 25 de
        kilograme, o ureche uscată de porc acoperă 20% din nevoia calorică
        zilnică. Însă pentru un câine de doar 10 kilograme, aceeași ureche
        reprezintă 40% din cantitatea zilnică de calorii necesară.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Mâncarea foarte grasă, mai ales resturile de la masa ta de prânz, poate
        cauza, pe termen lung, îngrășarea câinelui. Un gram de grăsime conține
        de două ori mai multe calorii decât unul de proteine sau carbohidrați.
        Acest lucru poate grăbi procesul de îngrășare al câinelui tău.
      </Para>
      <ReactPlayer
        url="https://youtu.be/cWk8f6f9DAY"
        style={{ margin: "0 auto", padding: "20px 0", maxWidth: "100%"}}
      />
      <Para style={{ paddingTop: "20px" }}>
        Pe lângă un aport prea mare de calorii, există și alte motive pentru
        care un câine ar avea nevoie de mai puțină hrană decât alți câini de
        aceeași vârstă sau rasă.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Un câine sterilizat, de exemplu, tinde spre un apetit crescut, devine
        mai puțin activ fizic și își schimbă procentajul de grăsime corporală.
        Noul său stil de viață reduce nevoile calorice ale câinelui cu 30% după
        castrare. Deoarece riscul de obezitate este de două ori mai mare la
        câinii castrați, ai grijă să îi reduci porția de hrană după această
        intervenție.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pe lângă asta, la anumite rase tendința de îngrășare este mai mare decât
        la altele, chiar dacă consumă aceeași cantitate de hrană. Labradorul
        Retriever și Cockerul Spaniel Englez au o predispoziție genetică de a
        avea mai multă grăsime corporală în corp. Aceste rase au nevoie de hrană
        cu mai puține calorii pentru că grăsimile folosesc mai puțină energie
        decât mușchii.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Sunt mai mici șansele ca unui câine cu păr lung să îi fie frig decât
        unuia cu blană foarte scurtă și fără substrat. Prin urmare, primul are o
        cerință energetică la fel de mică ca un câine care trăiește într-un
        climat cald. Nevoile câinelui trebuie să țină cont și de mișcarea
        zilnică, vârsta și caracterul individual al câinelui (energic sau
        leneș).
      </Para>
      <Para
        style={{ fontWeight: "700", paddingTop: "20px", paddingBottom: "20px" }}
      >
        4. Poate deveni un câine obez din cauza unei boli?
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pe lângă toate cauzele influențate de mediu și de stăpân, bolile pot fi
        de asemenea factori determinanți pentru un câine obez. Așa că vorbește
        cu veterinarul pentru a te asigura că patrupedul nu este bolnav.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Hipotiroidismul duce la producția prea mică de hormoni de către glanda
        tiroidă. Aceștia sunt responsabili pentru funcția celulelor, și prin
        urmare a metabolismului câinelui. Din cauza hormonilor lipsă sau
        insuficienți, celulele lucrează prea încet și nu mai consumă la fel de
        multă energie. Pe lângă asta, câinii bolnavi devin deseori leneși și nu
        mai fac atât de multă mișcare. Câinele se îngrașă tot mai mult, chiar
        dacă nu îi schimbi cantitatea de mâncare.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Una dintre bolile responsabile pentru obezitatea la câini Sindromul
        Cushing (hiperadrenocorticismul) – o boală a cortexului glandei
        suprarenale. În cazul acestei boli, glandele suprarenale produc prea
        mult cortizol, lucru care duce la creșterea apetitului și la scăderea
        dorinței de activități fizice. Aceste două simptome cauzează depozite de
        grăsime care, din cauza bolii, se depun mai ales pe abdomen. Câinii cu
        boala Cushing prezintă obezitate abdominală. Aceștia nu sunt câini grași
        obișnuiți, ci doar au o burtă grasă, ce atârnă, în timp ce restul
        corpului este deseori foarte suplu.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pe lângă bolile hormonale, există și alte afecțiuni care pot duce la
        îngrășare. Din cauza suferinței, patrupezii nu mai pot face suficientă
        mișcare. Din păcate, aceste boli sunt favorizate și de kilogramele în
        plus, motiv pentru care câinelui îi este greu să iasă din cercul vicios.
        De exemplu, problemele cardiovasculare și respiratorii duc la oboseală
        și performanță scăzută.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Dacă patrupedul are antecedente de artroză sau artrită, el nu va vrea să
        se miște mult din cauza durerilor. Se poate observa că animalelor
        afectate le este greu să se ridice sau să alerge după ce au stat mai
        mult timp întinse.
      </Para>
      <Para
        style={{ fontWeight: "700", paddingTop: "20px", paddingBottom: "20px" }}
      >
        5. Starea de sănătate a unui câine obez: consecințe
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Obezitatea este prima și cea mai importantă boală care duce la alte
        afecțiuni. Un câine supraponderal trăiește, în medie, cu doi ani mai
        puțin decât câinii cu greutate normală din aceeași rasă, din cauza
        urmărilor obezității și a bolilor asociate.
      </Para>
      <Img src={Dog2} style={{ paddingTop: "20px" }} />
      <Sec1>
        <Para style={{ fontSize: "20px" }}>Sistemul locomotor</Para>
      </Sec1>
      <Para style={{ color: "green" }}>
        Probleme de articulații și de mobilitate
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Câinii obezi de toate vârstele suferă de afecțiuni ale sistemului
        locomotor. În cazul câinilor tineri, în creștere, kilogramele în plus și
        excesul caloric pot duce la afecțiuni ortopedice iremediabile.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        În cazul câinilor adulți supraponderali, kilogramele în plus stresează
        articulațiile și a ligamentele. Posibilele consecințe sunt artrita,
        artroza, hernii de disc și rupturi de ligament încrucișat.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        La un câine obez, corpul produce mai mulți mediatori inflamatorii, care
        la rândul lor contribuie la progresia artritei. Urmarea acestor dureri
        de articulații este dorința redusă de a face mișcare și, prin urmare, un
        consum mai mic de energie și apariția kilogramelor în plus.
      </Para>
      <Sec1>
        <Para style={{ fontSize: "20px" }}>Aparatul respirator</Para>
      </Sec1>

      <Para style={{ paddingTop: "20px" }}>
        Masa corporală prea mare a unui câine obez cauzează o nevoie mai mare de
        oxigen. Pe lângă asta, patrupedul are depozite de grăsimi în cavitatea
        toracică. Spațiul restrâns rămas pentru respirație și nevoia ridicată de
        oxigen cauzează probleme și dificultăți respiratorii. Câinii au o
        rezistență scăzută la efort fizic și obosesc mai repede.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Un câine gras va refuza activitățile fizice și astfel va continua să se
        îngrașe din cauză că mănâncă mai multe calorii decât arde.
      </Para>
      <Sec1>
        <Para style={{ fontSize: "20px" }}>Sistemul cardiovascular</Para>
      </Sec1>
      <Para style={{ color: "green" }}>Probleme cardiovasculare</Para>
      <Para style={{ paddingTop: "20px" }}>
        Obezitatea este asociată cu apariția sau cel puțin progresia bolilor
        cardiace. Tensiunea arterială ridicată este unul dintre efectele
        negative. Însă dacă patrupedul slăbește din nou, unele dintre aceste
        limitări pot fi reduse.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Un câine gras depozitează excesul de energie sub formă de grăsimi în
        corp. Aceste grăsimi se infiltrează și în organe (cum ar fi ficat sau
        inimă). Problema: activitatea funcțională a inimii este restrânsă. De
        asemenea, ea trebuie să pompeze sânge pentru o masă corporală mai mare
        și lucrează cu o presiune mai mare în vase. Pe termen lung, toate
        acestea cauzează afecțiuni cardiace și insuficiență cardiacă.
      </Para>
      <Sec1>
        <Para style={{ fontSize: "20px" }}>Glicemie</Para>
      </Sec1>
      <Para style={{ color: "green" }}>Diabet zaharat</Para>
      <Para style={{ paddingTop: "20px" }}>
        Obezitatea poate duce la dezvoltarea diabetului zaharat de diabet tip
        II. La rândul lui, diabetul cauzează rezistență la insulină. Corpul
        produce încă suficientă insulină, dar aceasta nu mai are niciun efect
        asupra metabolismului.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Câinii diabetici au deseori un apetit mare și sunt obosiți și letargici
        în același timp. Acest lucru încurajează îngrășarea. Un regim strict și
        reducerea greutății pot îmbunătăți sau elimina diabetul zaharat tip II.
      </Para>
      <Sec1>
        <Para style={{ fontSize: "20px" }}>Risc la anestezie si operatie</Para>
      </Sec1>
      <Para style={{ color: "green" }}>
        Consum mai mare de anestezice și probleme la vindecarea rănii
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Țesuturile grase depozitează anestezicele și prin urmare e nevoie de o
        cantitate mai mare. În același timp este afectată descompunerea
        medicamentelor în ficat și eliminarea acestora prin rinichi. Împreună cu
        funcția pulmonară deseori afectată și problemele cardiace, un câine obez
        este considerat un pacient cu riscuri.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Fluxul sangvin redus din țesuturile corporale crește și riscul de
        infecții la răni și îngreunează vindecarea rănii după operație.
      </Para>
      <Sec1>
        <Para style={{ fontSize: "20px" }}>Alte urmari</Para>
      </Sec1>
      <Para style={{ color: "green" }}>Infecții și alte probleme</Para>
      <Para style={{ paddingTop: "20px" }}>
        Un câine supraponderal are un sistem imunitar scăzut și, prin urmare,
        este mai susceptibil la infecții și alte boli.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Greutatea corporală prea mare afectează și abilitatea câinelui de a se
        reproduce. Gestația la femele este asociată cu riscuri foarte mari, iar
        îngustarea canalului de naștere din cauza depozitelor de grăsimi, face
        nașterea mult mai dificilă.
      </Para>
      <Para style={{ padding: "20px 0" }}>
        Depozitele infiltrate de grăsimi (ce penetrează straturile de țesuturi)
        din ficat duc la un „ficat gras” și prin urmare la afectarea funcției
        hepatice. Pe lângă asta, un câine supraponderal este mai sensibil la
        căldură, mai iritabil și mai sedentar.
      </Para>
    </Container>
  );
};
