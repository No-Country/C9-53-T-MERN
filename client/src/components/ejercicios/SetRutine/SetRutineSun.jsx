import React, { useContext } from 'react'
import { RutineContext } from '../../../context/counter/RutineContext'
import { EjsByDayContext } from '../../../context/ejsByDay/EjsByDayContext'
import AddToButton from './AddToButton'

const SetRutineSun = () => {

    const { setRutineSun } = useContext(EjsByDayContext)
    const {rutine, clear} = useContext(RutineContext)

    const postSun = () =>{
        setRutineSun(rutine);
        clear();

    }

  return (

    <div 
    style={{
      marginTop: '0.5rem',
      paddingTop: '0.75rem',
      display: 'flex',
      justifyContent: 'center',
      height: '3rem',
      width:'90%',
      borderRadius: '20px',
      backgroundColor: '#FCBD3C',
      color: 'black',
      cursor:'pointer'
    }}

    onClick={postSun}

    >
      Añandir a Domingo
    
    </div>
  )
}

export default SetRutineSun