import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Quiz from "./pages/quiz/quiz";
import Analisador from "./pages/analisador/analisador";
import Sobre from "./pages/sobre/sobre";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/analisador" element={<Analisador />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </HashRouter>
  );
}

export default App;