import React from 'react'
import { EjsByDayContext } from './EjsByDayContext'
import { useState } from 'react';

const EjsByDayProvider = ({children}) => {

    const [rutineMon, setRutineMon] = useState([]);
    const [rutineTue, setRutineTue] = useState([]);
    const [rutineWed, setRutineWed] = useState([]);
    const [rutineThu, setRutineThu] = useState([]);
    const [rutineFri, setRutineFri] = useState([]);
    const [rutineSat, setRutineSat] = useState([]);
    const [rutineSun, setRutineSun] = useState([]);


    return (
        <EjsByDayContext.Provider value={{setRutineMon, setRutineTue, setRutineWed
            ,setRutineThu,setRutineFri,setRutineSat,setRutineSun,
            rutineMon,rutineTue,rutineWed,rutineThu,rutineFri,
            rutineSat,rutineSun}}>
            {children}
        </EjsByDayContext.Provider>
  )
}

export default EjsByDayProvider