import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Quiz from "./pages/quiz/quiz";
import Analisador from "./pages/analisador/analisador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/analisador" element={<Analisador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;