import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AmbienceDifuser from "./components/List-Form-Menu/ambienceDifuser";
import ProductDetails from "./components/List-Product/ProductDetails";
import Soliflores from "./components/List-Form-Menu/soliflores";
import Ondemanh from "./components/List-Form-Menu/onDemand";
import PillowMist from "./components/List-Form-Menu/pilowMist";
import Contact from "./components/List-Form-Menu/contact";
import LynneDeR from "./components/List-Form-Menu/ForWomen/LynneDeR";
import EauDeGrasseForWomen from "./components/List-Form-Menu/ForWomen/EauDeGrasseForWomen";
import EauDeGrasseForMen from "./components/List-Form-Menu/ForMen/EauDeGrasseForMen";
import AquaDivina from "./components/List-Form-Menu/ForWomen/AquaDivina";
import EteIndien from "./components/List-Form-Menu/ForWomen/EteIndien";
import Datsima from "./components/List-Form-Menu/ForWomen/Datsima";
import Oudissimo from "./components/List-Form-Menu/ForWomen/Oudissimo";
import RockyInTheSky from "./components/List-Form-Menu/ForMen/RockyInTheSky";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ambience-difuser" element={<AmbienceDifuser />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/soliflores" element={<Soliflores />} />
          <Route path="/ondemand" element={<Ondemanh />} />
          <Route path="/pillow-mist" element={<PillowMist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lynne-de-r" element={<LynneDeR />} />
          <Route path="/aqua-divina" element={<AquaDivina />} />
          <Route path="/eau-de-grasse-for-women" element={<EauDeGrasseForWomen />} />
          <Route path="/eau-de-grasse-for-men" element={<EauDeGrasseForMen />} />
          <Route path="/ete-indien" element={<EteIndien />} />
          <Route path="/datsima" element={<Datsima />} />
          <Route path="/oudissimo" element={<Oudissimo />} />
          <Route path="/rocky-in-the-sky" element={<RockyInTheSky />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
