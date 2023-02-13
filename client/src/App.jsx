// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import { AppRoutes } from './routes/AppRoutes';
// import Inicio from "./pages/Inicio";
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import Programas from "./pages/Programas";
// import SignUp from "./pages/SignUp";



function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  );
}

export default App;
