import React from 'react'
import Counter from '../components/ejercicios/Counter';
import EjerciciosAbdominales from '../components/ejercicios/EjerciciosAbdominales';
import EjerciciosBrazos from '../components/ejercicios/EjerciciosBrazos';
import EjerciciosPiernas from '../components/ejercicios/EjerciciosPiernas';
import NavBar from "../components/NavBar/NavBar";
import { useEjerciciosAbdominales } from '../context/ejercicios/EjerciciosAbdominalesProvider';
import { useEjerciciosBrazos } from '../context/ejercicios/EjerciciosBrazosProvider';
import { useEjerciciosPiernas } from '../context/ejercicios/EjerciciosPiernasProvider';

const Ejercicios = () => {

  const ejerciciosAbdominalesInfo = useEjerciciosAbdominales();

  const ejerciciosBrazosInfo = useEjerciciosBrazos();

  const ejerciciosPiernasInfo = useEjerciciosPiernas();


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

        <Counter/>

        <EjerciciosAbdominales info={ejerciciosAbdominalesInfo}/>
        <EjerciciosBrazos info={ejerciciosBrazosInfo}/>
        <EjerciciosPiernas info={ejerciciosPiernasInfo}/>



      </div>
      

</>
  );
}

export default Ejercicios