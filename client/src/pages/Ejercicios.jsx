import React, { useEffect, useState } from 'react'
import Counter from '../components/ejercicios/Counter';
import EjerciciosAbdominales from '../components/ejercicios/EjerciciosAbdominales';
import EjerciciosBrazos from '../components/ejercicios/EjerciciosBrazos';
import EjerciciosPiernas from '../components/ejercicios/EjerciciosPiernas';
import ProgramasUpperDiv from '../components/ejercicios/upperDiv/ProgramasUpperDiv';
import NavBar from "../components/NavBar/NavBar";
import { useEjerciciosAbdominales } from '../context/ejercicios/EjerciciosAbdominalesProvider';
import { useEjerciciosBrazos } from '../context/ejercicios/EjerciciosBrazosProvider';
import { useEjerciciosPiernas } from '../context/ejercicios/EjerciciosPiernasProvider';

const Ejercicios = () => {

  const ejerciciosAbdominalesInfo = useEjerciciosAbdominales();

  const ejerciciosBrazosInfo = useEjerciciosBrazos();

  const ejerciciosPiernasInfo = useEjerciciosPiernas();

  // const x = 0;

  // const modifyEjs = () =>{

  // }
  
  const [ejs, setEjs] = useState(1);
  // useEffect(() => setEjs, [ejs]);
  useEffect(() => {}, [ejs])


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
        <ProgramasUpperDiv/>

        <Counter/>


        <select
        style={{
          background: 'black',
          color: 'white',
          borderColor: '#FCBD3C',
          padding:' 0.35rem',
          margin: '1rem',
          cursor:'pointer',
          display: 'flex',
          justifyContent: 'start',
          fontWeight: '200'

        }}
        >
          <option>Elige Dificultad</option>
          <option value={0} onClick={() => setEjs(0)}>Básica</option>
          <option value={1} onClick={() => setEjs(1)}>Básica</option>
        </select>

        <EjerciciosAbdominales info={ejerciciosAbdominalesInfo[`${ejs}`]}/>
        {/* <EjerciciosAbdominales info={ejerciciosAbdominalesInfo[0]}/> */}
        {/* <EjerciciosBrazos info={ejerciciosBrazosInfo}/>
        <EjerciciosPiernas info={ejerciciosPiernasInfo}/> */}



      </div>
      

</>
  );
}

export default Ejercicios