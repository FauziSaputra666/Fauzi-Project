import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
