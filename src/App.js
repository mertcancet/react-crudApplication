import React from "react";
import YaziListesi from "./Components/YaziListesi";
import YaziDetayi from "./Components/YaziDetayi";
import { BrowserRouter as Router, Route } from "react-router-dom";
import YaziEkle from "./Components/YaziEkle";
import YaziDüzenle from "./Components/YaziDuzenle";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" exact component={YaziDetayi} />
          <Route path="/yaziEkle" component={YaziEkle} />
          <Route path="/posts/:id/edit" exact component={YaziDüzenle} />
        </div>
      </div>
    </Router>
  );
}

export default App;
