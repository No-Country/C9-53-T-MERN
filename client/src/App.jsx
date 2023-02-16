// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import RutineProvider from './context/counter/RutineProvider';
import EjerciciosAbdominalesProvider from './context/ejercicios/EjerciciosAbdominalesProvider';
import EjerciciosBrazosProvider from './context/ejercicios/EjerciciosBrazosProvider';
import EjerciciosPiernasProvider from './context/ejercicios/EjerciciosPiernasProvider';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (

    <AuthProvider>

      <RutineProvider>

        <EjerciciosPiernasProvider>
        <EjerciciosBrazosProvider>
        <EjerciciosAbdominalesProvider>
          
            <AppRoutes/>
          
        </EjerciciosAbdominalesProvider>
        </EjerciciosBrazosProvider>
        </EjerciciosPiernasProvider>

      </RutineProvider>
      
    </AuthProvider>

    
  );
}

export default App;
