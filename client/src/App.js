import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from "./pages/Inicio";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Programas from "./pages/Programas";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
