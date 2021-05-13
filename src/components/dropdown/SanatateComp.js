import React, { useEffect } from "react";
import Catel1 from "../common/img/catel1.jpeg";
import Catel2 from "../common/img/catel2.jpeg";
import Catel3 from "../common/img/catel3.jpg";
import Catel4 from "../common/img/catel4.jpg";
import Catel5 from "../common/img/catel5.jpeg";
import Catel6 from "../common/img/catel6.jpeg";
import {
  Container,
  Div,
  Divs,
  Img,
  Link1,
  Title,
  Para,
} from "./SanatateComp.style";
export const SanatateComp = () => {
  useEffect(() => {
    document.title = "Sanatate";
  });
  const titles = {
    title1:
      " Ce pot face dacă am un câine obez? Obezitatea la câini: cauze și urmări",
    title2: "De ce se scarpină câinele: pruritul (mâncărimea) la câine ",
    title3: "Îngrijirea blănii câinelui: sfaturi pentru toate tipurile de păr ",
    title4: "Pancreatita la câini ",
    title5: " Perioada de călduri la cățele ",
    title6:
      "Fitness pentru câini: cum să-l ajuți să ajungă la greutatea ideală",
  };
  const paragraphs = {
    para1:
      "Supraponderabilitatea este o problemă majoră de sănătate pentru câini. Oricât de simpatic ți-ar părea când este “pufos”, un câine obez suferă. Nu doar că este afectată semnificativ calitatea vieții și speranța lor de viață, ci crește și riscul de probleme cardiace, diabet sau dureri ale articulațiilor. Află aici cum să îți dai seama dacă patrupedul tău este supraponderal.",
    para2:
      "Cu toții știm: câinele se scarpină din când în când. Mai ales în perioada de năpârlire, frecvența scărpinatului crește. Însă dacă acest lucru depășește nivelul normal și, în plus, acesta se linge și curăță mai mult, ar trebui să acordați urgent mai multă atenție și, cu ajutorul veterinarului, să aflați de ce se scarpină câinele. Mâncărimea poate afecta într-o mare măsură bunăstarea câinelui și poate reduce calitatea vieții. Uneori, mâncărimea este atât de severă, încât nici câinele și nici stăpânul său nu mai pot dormi.",
    para3:
      "Îngrijit din cap până-n lăbuțe – câinele nu doar că arată bine, ci se și simte bine în pielea lui. Mai jos vei găsi sfaturi despre cum să te ocupi cu succes de îngrijirea blănii câinelui tău.",
    para4:
      "Pancreatita la câini (inflamația pancreasului) este o boală inflamatorie a pancreasului, care poate fi acută sau cronică. Atât formele acute, cât și cele cronice pot fi ușoare sau severe. Manifestarea ușoară este, de obicei, însoțită doar de tulburări locale minore, în timp ce manifestarea severă poate duce la modificări majore ale pancreasului și ale altor organe. Inflamația acută a pancreasului este, de obicei, severă, în timp ce pancreatita cronică este adesea ușoară, cu un prognostic mai bun.",
    para5:
      "Perioada de călduri la cățele este perfect normală. Totuși, comportamentul ciudat al cățelei, petele enervante de pe noul covor sau frica de o sarcină nedorită sunt motive de îngrijorare pentru mulți proprietari de câini. Din acest articol, poți afla ce ar trebui să știi despre zilele zilele de ciclu la cățele și cum puteți trece împreună peste ele fără stres.",
    para6:
      "Drumul spre inima unui câine trece prin stomac. Însă un lucru făcut din iubire poate ajunge să fie cauza kilogramelor în plus. Cu ajutorul tău și cu un program ușor de fitness pentru câini, patrupedul tău poate reduce greutatea în exces. Astfel, va reveni la o formă fizică bună și va fi capabil să se miște din nou fără probleme. În acest articol îți vom arăta ce exerciții îmbunătățesc starea fizică a câinilor și în același timp aduc beneficii și sănătății tale.",
  };
  return (
    <Container>
      <Divs>
        <Div>
          <Link1 to="/Sanatate/obezitate-caini">
            <Img src={Catel1} />
          </Link1>
          <Link1 to="/Sanatate/obezitate-caini">
            <Title>{titles.title1}</Title>
          </Link1>
          <Para>{paragraphs.para1}</Para>
        </Div>
        <Div>
          <Link1 to="/Sanatate/prurit-caini">
            <Img src={Catel2} />
          </Link1>
          <Link1 to="/Sanatate/prurit-caini">
            <Title>{titles.title2}</Title>
          </Link1>
          <Para>{paragraphs.para2}</Para>
        </Div>
        <Div>
          <Link1 to="/Sanatate/ingrijirea-blanii">
            <Img src={Catel3} />
          </Link1>
          <Link1 to="/Sanatate/ingrijirea-blanii">
            <Title>{titles.title3}</Title>
          </Link1>
          <Para>{paragraphs.para3}</Para>
        </Div>
        <Div>
          <Link1 to="/Sanatate/pancreatita-caini">
            <Img src={Catel4} />
          </Link1>
          <Link1 to="/Sanatate/pancreatita-caini">
            <Title>{titles.title4}</Title>
          </Link1>
          <Para>{paragraphs.para4}</Para>
        </Div>
        <Div>
          <Link1 to="/Sanatate/perioada-calduri-caini">
            <Img src={Catel5} />
          </Link1>
          <Link1 to="/Sanatate/perioada-calduri-caini">
            <Title>{titles.title5}</Title>
          </Link1>
          <Para>{paragraphs.para5}</Para>
        </Div>
        <Div>
          <Link1 to="/Sanatate/fitness">
            <Img src={Catel6} />
          </Link1>
          <Link1 to="/Sanatate/fitness">
            <Title>{titles.title6}</Title>
          </Link1>
          <Para>{paragraphs.para6}</Para>
        </Div>
      </Divs>
    </Container>
  );
};
