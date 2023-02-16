// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import EjerciciosAbdominalesProvider from './context/ejercicios/EjerciciosAbdominalesProvider';
import EjerciciosBrazosProvider from './context/ejercicios/EjerciciosBrazosProvider';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (
    <EjerciciosBrazosProvider>
    <EjerciciosAbdominalesProvider>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </EjerciciosAbdominalesProvider>
    </EjerciciosBrazosProvider>
  );
}

export default App;
