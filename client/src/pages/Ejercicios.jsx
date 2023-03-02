import React, { useState } from 'react'
import Counter from '../components/ejercicios/Counter';
import EjerciciosAbdominales from '../components/ejercicios/EjerciciosAbdominales';
import EjerciciosBrazos from '../components/ejercicios/EjerciciosBrazos';
// import EjerciciosPiernas from '../components/ejercicios/EjerciciosPiernas';
import ProgramasUpperDiv from '../components/ejercicios/upperDiv/ProgramasUpperDiv';
import NavBar from "../components/NavBar/NavBar";
import { useEjerciciosAbdominales } from '../context/ejercicios/EjerciciosAbdominalesProvider';
import { useEjerciciosBrazos } from '../context/ejercicios/EjerciciosBrazosProvider';
// import { useEjerciciosPiernas } from '../context/ejercicios/EjerciciosPiernasProvider';



import Select from "react-select";
import {NewRutine} from '../components/ejercicios/options/NewRutine';
import { ChoosedRutines } from '../components/ejercicios/options/ChoosedRutines';
import LateralBar from '../components/latearl bar/LateralBar';


const Ejercicios = () => {

  const ejerciciosAbdominalesInfo = useEjerciciosAbdominales();

  const ejerciciosBrazosInfo = useEjerciciosBrazos();

  // const ejerciciosPiernasInfo = useEjerciciosPiernas();

  const selectStyles = {
    option: (base, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...base,
        backgroundColor: isFocused ? 'rgba(252, 189, 60, 0.2)' : "black",
      };
    },
    container: (base) => ({
      ...base,
      backgroundColor: '#FCBD3C',
      padding: 2,
      borderRadius: 2,
      margin:7
      
    }),
    singleValue: (base) => ({
      ...base,
      padding: 5,
      borderRadius: 5,
      background: 'black',
      color: 'white',
      display: 'flex',
    }),
    control: (base, state) => ({
      ...base,
      background: 'black',
      border: state.isFocused ? "1.5px solid #FCBD3C" : "1.5px solid #FCBD3C",
      boxShadow: state.isFocused ? "0px 0px 6px #FCBD3C" : "#FCBD3C",
      "&:hover": {
        border: "1.5px solid #FCBD3C",
        // boxShadow: "0px 0px 6px #FCBD3C"
      }
    }),
    menu: (base, state) => ({
      ...base,
      background: 'black',
      color: 'white',
      border: state.isFocused ? "1.5px solid #FCBD3C" : "1.5px solid #FCBD3C",
      boxShadow: state.isFocused ? "0px 0px 6px #FCBD3C" : "#FCBD3C",
      "&:hover": {
        border: "1.5px solid #FCBD3C",
      }
    }),
  };

  const options = [
    { value: 0, label: 'Básico' },
    { value: 1, label: 'Intermedio' },
    { value: 2, label: 'Avanzado' },
  ];

  const [level, setLevel] = useState(1)

  const handleChange = ({value}) => {
    setLevel(value);
    console.log(`Option selected:`, value);
  };

  

  return (<>

      <NavBar />
      <LateralBar/>

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
        <NewRutine/>
        <ChoosedRutines/>

        <Select
          styles={selectStyles}
          options={options}
          defaultValue={options[0]}
          onChange={handleChange}
          captureMenuScroll= {true}
          
        />

        <EjerciciosAbdominales info={ejerciciosAbdominalesInfo[level]}/>
        <EjerciciosBrazos info={ejerciciosBrazosInfo[level]}/>
        {/* <EjerciciosPiernas info={ejerciciosPiernasInfo}/>  */}


      </div>
      

</>
  );
}

export default Ejercicios