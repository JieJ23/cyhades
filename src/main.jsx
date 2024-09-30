import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider } from "./Hook/DataFetch.jsx";

import App from "./App.jsx";
// import Hades from "./Pages/Hades.jsx";
import Hades2 from "./Pages/Hades2.jsx";

import HadesTopAspect from "./Pages/HadesTopAspects.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/Hades" element={<Hades />} /> */}
          <Route path="/HadesTopAspect" element={<HadesTopAspect />} />
          <Route path="/Hades2" element={<Hades2 />} />
        </Routes>
      </Router>
    </DataProvider>
  </StrictMode>
);
