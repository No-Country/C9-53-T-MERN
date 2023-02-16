// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import EjerciciosAbdominalesProvider from './context/ejercicios/EjerciciosAbdominalesProvider';
import EjerciciosBrazosProvider from './context/ejercicios/EjerciciosBrazosProvider';
import EjerciciosPiernasProvider from './context/ejercicios/EjerciciosPiernasProvider';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (
    <AuthProvider>

      <EjerciciosPiernasProvider>
      <EjerciciosBrazosProvider>
      <EjerciciosAbdominalesProvider>
        
          <AppRoutes/>
        
      </EjerciciosAbdominalesProvider>
      </EjerciciosBrazosProvider>
      </EjerciciosPiernasProvider>
      
    </AuthProvider>
  );
}

export default App;
