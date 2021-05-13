// import { Header } from "./components/common/header/Header";
// import { Navbar } from "./components/common/navbar/Navbar";
// import { Slider } from "./components/common/slider/Slider";
// import { Footer } from "./components/common/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutWestie } from "./pages/AboutWestie";
import { Contact } from "./pages/Contact";
import { Homepage } from "./pages/Homepage";
import { Sponsors } from "./pages/Sponsors";
import { Termeni } from "./pages/Termeni";
import { Gdpr } from "./pages/Gdpr";
import Sfaturi from "./pages/Sfaturi";
import { Nutritie } from "./pages/Nutritie";
import { Sanatate } from "./pages/Sanatate";
import { Dresaj } from "./pages/Dresaj";
import { Diverse } from "./pages/Diverse";
import { ObezitateCaini } from "./pages/ObezitateCaini";
import "./components/SfaturiSec.css";
import { PruritCaini } from "./pages/PruritCaini";
import { IngrijireaBlanii } from "./pages/IngrijireaBlanii";
import { PancreatitaCaini } from "./pages/PancreatitaCaini";
import { Period } from "./pages/Period";
import { Fitness } from "./pages/Fitness";
import { DresajClicker } from "./pages/DresajClicker";
import { DresajLesa } from "./pages/DresajLesa";
import { DresajPasi } from "./pages/DresajPasi";
import { Parteneri } from "./pages/Parteneri";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={AboutWestie} />
        <Route path="/Nutritie" component={Nutritie} />
        <Route path="/Sanatate" component={Sanatate} exact />
        <Route path="/Sanatate/obezitate-caini" component={ObezitateCaini} />
        <Route path="/Sanatate/prurit-caini" component={PruritCaini} />
        <Route
          path="/Sanatate/ingrijirea-blanii"
          component={IngrijireaBlanii}
        />
        <Route
          path="/Sanatate/pancreatita-caini"
          component={PancreatitaCaini}
        />
        <Route path="/Sanatate/perioada-calduri-caini" component={Period} />
        <Route path="/Sanatate/fitness" component={Fitness} />
        <Route path="/Dresaj" component={Dresaj} exact />
        <Route path="/Dresaj/dresaj-clicker" component={DresajClicker} />
        <Route path="/Dresaj/dresaj-lesa" component={DresajLesa} />
        <Route path="/Dresaj/dresaj-pasi" component={DresajPasi} />
        <Route path="/Diverse" component={Diverse} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/contact" component={Contact} />
        <Route path="/termeni-si-conditii" component={Termeni} />
        <Route path="/gdpr" component={Gdpr} />
        <Route path="/sfaturi" component={Sfaturi} />
        <Route path="/parteneri" component={Parteneri} />
      </Switch>
    </Router>
  );
}

export default App;
