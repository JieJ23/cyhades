import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider } from "./Hook/DataFetch.jsx";

import App from "./App.jsx";
import Hades from "./Pages/Hades.jsx";
import Hades2 from "./Pages/Hades2.jsx";

import HadesTopAspect from "./Pages/HadesTopAspects.jsx";
import HadesH1TopAspect from "./Pages/Hades1TopAspect.jsx";

import BoonSelection from "./Pages/BoonSelection.jsx";
import H2Boons from "./Pages/H2Boons.jsx";
import FearCalculator from "./Pages/FearCalculator.jsx";

import Guide from "./Pages/H2Guide.jsx";
//
import WeaponMoonstoneAxe from "./Pages/Weapon/WeaponMoonstoneAxe.jsx";

import ID1 from "./Pages/Guides/ID1.jsx";
//

import FormSubmission from "./Pages/FormSubmission.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DataProvider> */}
    <Router>
      <Routes>
        <Route path="/" element={<Hades2 />} />
        {/* <Route path="/Hades" element={<Hades />} />
        <Route path="/FearCalculator" element={<FearCalculator />} />
        <Route path="/H2Boons" element={<H2Boons />} />
        <Route path="/BoonSelection" element={<BoonSelection />} /> */}

        {/* <Route path="/Guide" element={<Guide />} /> */}
        {/*  */}
        {/* <Route path="/WeaponMoonstoneAxe" element={<WeaponMoonstoneAxe />} /> */}

        {/*  */}
        {/* <Route path="/ID1" element={<ID1 />} /> */}

        {/*  */}
        {/* 
        <Route path="/HadesH1TopAspect" element={<HadesH1TopAspect />} />
        <Route path="/HadesTopAspect" element={<HadesTopAspect />} />
        <Route path="/Hades2" element={<Hades2 />} /> */}
        <Route path="/FormSubmission" element={<FormSubmission />} />
      </Routes>
    </Router>
    {/* </DataProvider> */}
  </StrictMode>
);
