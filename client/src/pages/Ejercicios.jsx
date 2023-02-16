import React from 'react'
import EjerciciosAbdominales from '../components/ejercicios/EjerciciosAbdominales';
import NavBar from "../components/NavBar/NavBar";
import { useEjerciciosAbdominales } from '../context/ejercicios/EjerciciosAbdominalesProvider';
import { useEjerciciosBrazos } from '../context/ejercicios/EjerciciosBrazosProvider';

const Ejercicios = () => {

  const ejerciciosAbdominalesInfo = useEjerciciosAbdominales();

  const ejerciciosBrazosInfo = useEjerciciosBrazos();




  return (<>

      <NavBar />

      
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%', 

        }}
      >

        <EjerciciosAbdominales info={ejerciciosAbdominalesInfo}/>



      </div>
      

</>
  );
}

export default Ejercicios