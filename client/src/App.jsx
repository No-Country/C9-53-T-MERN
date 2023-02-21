// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import RutineProvider from './context/counter/RutineProvider';
import EjerciciosAbdominalesProvider from './context/ejercicios/EjerciciosAbdominalesProvider';
import EjerciciosBrazosProvider from './context/ejercicios/EjerciciosBrazosProvider';
import EjerciciosPiernasProvider from './context/ejercicios/EjerciciosPiernasProvider';
import EjsByDayProvider from './context/ejsByDay/EjsByDayProvider';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (
  
  

    <AuthProvider>
      
      
      <EjsByDayProvider>
      <RutineProvider>


        <EjerciciosPiernasProvider>
        <EjerciciosBrazosProvider>
        <EjerciciosAbdominalesProvider>

          
            <AppRoutes/>
         

        </EjerciciosAbdominalesProvider>
        </EjerciciosBrazosProvider>
        </EjerciciosPiernasProvider>
        
      
      </RutineProvider> 
      </EjsByDayProvider>
      
      
      
    </AuthProvider>
    
    

    
  );
}

export default App;
