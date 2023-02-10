import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../App.css';
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Programas from "../pages/Programas";
import SignUp from "../pages/SignUp";


export const AppRoutes = () => {
    
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/inicio" element={<Inicio />} /> */}
          <Route path="/programas" element={<Programas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
