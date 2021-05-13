import React, { useEffect } from "react";
import {
  Container,
  Title,
  Img,
  Para,
  Sec1,
  List,
  Li,
} from "./PruritCainiComp.style";
import Catel2 from "./common/img/catel2.jpeg";
export const PruritCainiComp = () => {
  useEffect(() => {
    document.title = "Prurit";
  });
  return (
    <Container>
      <Title>De ce se scarpină câinele: pruritul (mâncărimea) la câine</Title>
      <Img src={Catel2} />
      <Para style={{ paddingTop: "20px" }}>
        Cu toții știm: câinele se scarpină din când în când. Mai ales în
        perioada de năpârlire, frecvența scărpinatului crește. Însă dacă acest
        lucru depășește nivelul normal și, în plus, acesta se linge și curăță
        mai mult, ar trebui să acordați urgent mai multă atenție și, cu ajutorul
        veterinarului, să aflați de ce se scarpină câinele. Mâncărimea poate
        afecta într-o mare măsură bunăstarea câinelui și poate reduce calitatea
        vieții. Uneori, mâncărimea este atât de severă, încât nici câinele și
        nici stăpânul său nu mai pot dormi.
      </Para>
      <Sec1>
        <Para style={{ fontWeight: "700" }}>Cuprins</Para>
      </Sec1>
      <Para style={{ color: "green", fontWeight: "700" }}>
        1. Din ce cauze se scarpină câinele?
      </Para>
      <Para style={{ color: "green", fontWeight: "700" }}>
        2. De ce se scarpină câinele? Diagnosticul mâncărimii
      </Para>
      <Para style={{ color: "green", fontWeight: "700" }}>
        3. Tratarea mâncărimii câinelui
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Mâncărimea la câine se poate manifesta în mai multe moduri diferite.
        Adesea, proprietarul observă cum câinele se scarpină pe diferite zone
        ale corpului, folosindu-și labele din față saupe cele din spate. Orice
        parte a corpului poate fi afectată de puruit. Scuturatul capului indică,
        de exemplu, mâncărime în zona urechilor. Mai mult, câinii își ling și
        rod labele sau picioarele, ori chiar spatele și crupa. Dacă în anumite
        zone ale corpului câinele abia ajunge sau nu ajunge deloc, le freacă de
        perete sau de covor pentru a-și potoli mâncărimea. În multe cazuri,
        însă, nu este doar mâncărime. Uneori, câinele se scarpină până îi dă
        sângele. Scărpinatul constant inflamează pielea și deschide calea pentru
        infectarea cu bacterii, ciuperci și alți agenți patogeni. O infecție a
        pielii intensifică mâncărimea, astfel că patrupedul este prins în cercul
        vicios al pruritului.
      </Para>
      <Para style={{ fontSize: "18px", fontWeight: "700", paddingTop: "20px" }}>
        1. Din ce cauze se scarpină câinele?
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Mâncărimea este unul dintre cele mai frecvente motive pentru a duce
        câinele la medicul veterinar. Există multe cauze și diferite boli care
        pot provoca puruit câinelui. Vi le prezentăm aici pe cele mai
        importante:
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Se face o distincție între cauzele primare și cele secundare: în cazul
        cauzelor primare de mâncărime, aceasta există mai întâi și abia apoi
        apar modificări ale pielii. În schimb, cauzele secundare arată mai întâi
        modificări ale pielii și apoi mâncărimi.
      </Para>
      <Para
        style={{
          color: "green",
          textDecoration: "underline",
          fontWeight: "700",
          paddingTop: "20px",
        }}
      >
        Ectoparaziții
      </Para>
      <Para
        style={{ fontSize: "20px", fontStyle: "italic", paddingTop: "20px" }}
      >
        Cheyletiella (Acarienii prădători)
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Acest tip de acarieni este adesea trecut cu vederea, însă nu este mai
        puțin frecvent. Cheyletiella nu sunt specifici gazdei, apar la câini,
        pisici și iepuri, oamenii sunt gazde accidentale. Aceștia se transmit
        prin contact direct sau din mediu. Acarienii prădători trăiesc foarte
        superficial pe piele și se hrănesc cu lichid tisular. Mâncărimea pe care
        o cauzează poate varia în severitate, adesea se localizează pe spate,
        umeri și, eventual, pe partea exterioară a urechilor câinilor. Este
        tipică formarea de mătreață pe spate.
      </Para>
      <Para
        style={{ fontSize: "20px", fontStyle: "italic", paddingTop: "20px" }}
      >
        Râia sarcoptică (Acarienii Sarcoptes)
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Acarianii Sarcoptes sunt foarte specifici gazdei, extrem de contagioși
        și zoonotici (transmisibili la oameni). Se transmit prin contact direct
        cu câinii afectați sau din mediu. Aceștia sapă tuneluri în stratul de
        cheratină al pielii câinelui și depune acolo ouă și excremente. Se
        hrănesc cu celulele moarte ale pielii și lichid tisular. Câinele se
        scarpină din cauza mâncărimii cauzate, pe de o parte de acarienii
        înșiși, dar și din cauza unei reacții alergice la produsele lor
        metabolice. De cele mai multe ori, mâncărimea aproape că nu se
        ameliorează, persistă și noaptea și atunci când câinelui i se distrage
        atenția. Mâncărimea apare în principal pe lobii urechilor, articulații
        (coate, genunchi și glezne) și pe abdomen și piept, iar mai târziu pe
        întregul corp.
      </Para>
      <Para
        style={{ fontSize: "20px", fontStyle: "italic", paddingTop: "20px" }}
      >
        Acarienii de recoltă (Trombicula autumnalis)
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Acarianul de recoltă este un parazit portocaliu-roșu, de mărimea unei
        gămălii de ac, care apare mai ales vara și toamna. Larva acarienului se
        hrănește cu lichidul limfatic al gazdei. Acesta se găsește în iarba
        înaltă, aici își așteaptă gazda și se localizeză în primul rând pe labe
        (între degetele de la picioare), burtă (în special pe mameloane) și cap.
        Mai ales la animalele sensibile, mușcătura larvei poate provoca reacții
        alergice cu mâncărime severă. Chiar și după eliminarea paraziților,
        mâncărimea poate persista într-o primă fază.
      </Para>
      <Para
        style={{ fontSize: "20px", fontStyle: "italic", paddingTop: "20px" }}
      >
        Acarienii auriculari (Otodectes cynotis)
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pentru că acarienii auriculari sunt foarte specializați, aceștia
        afectează în mod preferențial canalul urechii externe, mai rar pielea
        din jurul urechii. În toate etapele dezvoltării, acarienii auriculari se
        hrănesc cu lichide tisulare superficiale și celule moarte ale pielii
        câinelui. Aceștia se transmit prin contact direct cu animalele
        infectate. Sunt afectați în mare parte puii de câine, mai rar câinii
        adulți. Tipic pentru o infestare cu acarieni este mâncărimea puternică
        în urechi și în zona ­urechii.
      </Para>
      <Para
        style={{ fontSize: "20px", fontStyle: "italic", paddingTop: "20px" }}
      >
        Puricii la câini
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Infestarea cu purici este un motiv obișnuit de mâncărime la câini.
        Puricii se transmit de la animalele infestate sau prin stadiile de
        dezvoltare juvenilă ale puricilor în mediu (ex. loc de dormit sau
        mașină). Puruitul cauzat de infestarea cu purici apare mai ales pe spate
        și coadă, precum și pe abdomen, coapse interioare și gât.
        Hipersensibilizarea la alergeni la purici poate duce la dermatită
        alergică la purici (DAP) sau alergie la saliva de purici.
      </Para>
      <Para style={{ fontSize: "18px", fontWeight: "700", paddingTop: "20px" }}>
        2. De ce se scarpină câinele? Diagnosticul mâncărimii
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pentru că există atât de multe cauze ale mâncărimii la câini, un istoric
        medical detaliat și un raport preliminar exact stau la baza unei
        abordări structurate a diagnosticului de către medicul veterinar.
        Semnalmentele și raportul preliminar oferă deja informații utile.
        Deosebit de importante sunt următoarele puncte:
      </Para>
      <List style={{ listStyleType: "ordered", paddingTop: "20px" }}>
        <Li>
          Semnalmente, asta înseamnă rasă, sex, vârstă, mărime și greutate
        </Li>
        <Li>Vârsta la începutul problemei legate de mâncărime</Li>
        <Li>Simptome asemănătoare la părinți și/sau frați</Li>
        <Li>Localizarea mâncărimii</Li>
        <Li>Caracterul sezonier </Li>
        <Li> Alte animale sau persoane din gospodărie afectate </Li>
        <Li>Tratare prealabilă: răspuns la terapia anterioară</Li>
        <Li>
          Prima dată a apărut mâncărimea sau mai întâi au apărut modificări ale
          pielii?
        </Li>
      </List>
      <Para style={{ paddingTop: "20px" }}>
        Pe baza acestor informații și după examinarea clinică, medicul veterinar
        poate începe diagnosticarea.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Ectoparaziții sunt cauze comune, în mare parte ușor de detectat, ale
        mâncărimii.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Examinarea pielii, părului și a pieptenelui pentru purici poate să
        scoată la iveală prezența unor paraziți. Dacă nu se reușește detectarea
        acestora și suspiciunea clinică este încă foarte mare, trebuie efectuată
        o terapie de diagnosticare, adică se administrează un agent împotriva
        parazitului suspectat și se așteaptă rezultatul.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Examinarea pielii, părului și a pieptenelui pentru purici poate să
        scoată la iveală prezența unor paraziți. Dacă nu se reușește detectarea
        acestora și suspiciunea clinică este încă foarte mare, trebuie efectuată
        o terapie de diagnosticare, adică se administrează un agent împotriva
        parazitului suspectat și se așteaptă rezultatul.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Cu ajutorul unor proceduri citologice sau a unei antibiograme cu
        detectare de agenți patogeni, bacteriile și ciupercile pot fi
        identificate ca agenți patogeni. Aici este important să se determine
        cauza colonizării acestor agenți infecțioși.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pentru infecțiile fungice (dermatofite) există, de asemenea, diferite
        metode de diagnostic. Examinarea cu lampa Wood este foarte simplă, în
        cazul pozitiv, se observă o fluorescență verde a axului părului. Totuși,
        acest lucru apare doar în infecțiile cu unele tulpini de
        Microspor­­­­­um canis, astfel încât un rezultat negativ nu indică
        faptul că nu există o ciupercă de piele.­­­­ De asemenea, se poate crea
        o cultură fungică. Materialul pentru cultura fungică poate fi obținut
        din păr, piele sau prin metoda McKenzie (metoda periei de dinți).
      </Para>
      <Para style={{ fontSize: "18px", fontWeight: "700", paddingTop: "20px" }}>
        3. Tratarea mâncărimii câinelui
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        În caz de mâncărime extremă, este adesea necesar să se amelioreze rapid
        suferința câinelui cu medicamente, înainte sau în timpul diagnosticului.
        Acest lucru este posibil cu medicamente cu acțiune rapidă, precum
        glucocorticoizi sau oclacitinib, dar și cu terapie locală, de exemplu cu
        șampoane. Cu toate acestea, este absolut necesar să aflăm motivul exact
        pentru care se scarpină câinele, pentru a rezolva problema definitiv.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Pentru că ectoparaziții sunt adesea motivul pentru mâncărime, medicul
        veterinar trebuie să administreze un agent antiparazitar adecvat.
        Această terapie se realizează după depistarea paraziților respectivi sau
        în cazul unei suspiciuni ridicate. Alergia la saliva de purici este, de
        asemenea, tratată prin administrarea regulată a unui preparat contra
        puricilor și, dacă este necesar, prin medicamente pentru a reduce
        mâncărimea.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        În funcție de severitatea bolii fungice, este necesară terapia locală cu
        unguente ori tinctură, sau terapia sistemică cu antifungice. Cu toate
        acestea, trebuie să se țină cont întotdeauna că dermatofitoza este o
        zoonoză, ceea ce înseamnă că și oamenii pot fi infectați. În cazul unei
        dermatofitoze pronunțate, poate fi necesar și un tratament de mediu.
        Dacă există o senzație de mâncărime severă, aceasta nu trebuie tratată
        cu glucocorticoizi, altfel boala fungică va evolua.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        În cazul alergiei de contact se tratează mâncărimea și se evită
        alergenul. În plus, prin șamponarea punctului de contact în cauză cu
        preparate speciale, alergenul se poate dilua.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Dacă este vorba despre o alergie alimentară, vă recomandăm să evitați
        alergenii, adică hrăniți câinele cu o hrană cu ingrediente pe care
        câinele le tolerează bine și la care nu are reacții alergice.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Singura terapie „cauzală” a atopiei este hiposensibilizarea, o
        imunoterapie specifică alergenului, în care câinelui i se oferă în mod
        special și crescând concentrația alergenii la care reacționează. Scopul
        este stimularea sistemului imunitar al câinelui și obținerea unei
        toleranțe la alergenii care provoacă mâncărime.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Cu toate acestea, nu toți câinii răspund satisfăcător la această
        terapie. Terapia suplimentară cu medicamente antipruriginoase, cum ar fi
        cortizonul, antihistaminicele, ciclosporina sau oclacitinib este deseori
        necesară. Acizii grași esențiali pot ajuta, de asemenea, la reducerea
        mâncărimii. Un alt tratament pentru mâncărime în atopie a devenit recent
        posibil: tratamentul biologic cu anticorpi monoclonali. Până în prezent,
        acest tip de terapie pare a fi extrem de promițător și este, de
        asemenea, foarte bine tolerat.
      </Para>
      <Para style={{ paddingTop: "20px" }}>
        Infecțiile secundare cu bacterii sau ciuperci pot fi tratate cu agenți
        terapeutici locali antibacterieni sau antifungici (șampoane, unguente,
        spray-uri etc.), sau cu antibiotice și antimicotice, în funcție de
        gravitatea lor. În plus, trebuie căutată și tratată întotdeauna boala
        cauzală.
      </Para>
    </Container>
  );
};
