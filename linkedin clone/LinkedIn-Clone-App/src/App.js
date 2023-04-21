import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSectionProfile from "../src/componets/MainSectionProfile"
import Home from "./componets/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/me" element={<MainSectionProfile />} />
        <Route path="/profile/:id" element={<MainSectionProfile />} /> {/**  PRENDERO' DINAMICAMENTE IL PARAM DEL ID DEL PROFILO DI UN DETERM. USER E LO PASSO A CONDIZIONE SULLA GET IN MODO DA CAMBIARE URL DELLA FETCH.  */}
        <Route path="/" element={<Home/>} />
        {/*<Route path="/" element={<d/> } />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
