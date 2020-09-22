import React from "react";
import YaziListesi from "./Components/YaziListesi";
import YaziDetayi from "./Components/YaziDetayi";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    //-HEADER
    //-POST LIST
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Route exact path="/" component={YaziListesi} />
          <Route path="/posts/:id" component={YaziDetayi} />
        </div>
      </div>
    </Router>
  );
}

export default App;
