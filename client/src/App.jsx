// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import AuthProvider from './context/AuthProvider';
import RutineProvider from './context/counter/RutineProvider';
import EjerciciosAbdominalesProvider from './context/ejercicios/EjerciciosAbdominalesProvider';
import EjerciciosBrazosProvider from './context/ejercicios/EjerciciosBrazosProvider';
import EjerciciosPiernasProvider from './context/ejercicios/EjerciciosPiernasProvider';
import EjsByDayProvider from './context/ejsByDay/EjsByDayProvider';
import { AppRoutes } from './routes/AppRoutes';


function App() {

  const [user, setUser] = useState(null)

  const url_api = process.env.URL_API || "https://fit-house.onrender.com"
  useEffect(() => {

    console.log('Peticion /login/session');
    fetch(`${url_api}/login/session`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    })
      .then(res => {
        console.log('respuesta de la peticion')
        res.json()
      })
      .then(res => {
        console.log('respuesta de la peticion');
        setUser(res)
        console.log(res)
      })
      .catch(
        err => console.log(err)
      )

    console.log('termina petición');
  }, [])



  return (



    <AuthProvider>


      <EjsByDayProvider>
        <RutineProvider>


          <EjerciciosPiernasProvider>
            <EjerciciosBrazosProvider>
              <EjerciciosAbdominalesProvider>


                <AppRoutes user={user} />


              </EjerciciosAbdominalesProvider>
            </EjerciciosBrazosProvider>
          </EjerciciosPiernasProvider>


        </RutineProvider>
      </EjsByDayProvider>



    </AuthProvider>




  );
}

export default App;
