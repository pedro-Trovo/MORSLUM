import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Sobre from "./pages/sobre/sobre";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </HashRouter>
  );
}

export default App;