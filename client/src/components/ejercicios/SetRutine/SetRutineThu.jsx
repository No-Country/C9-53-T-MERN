import React, { useContext } from 'react'
import { RutineContext } from '../../../context/counter/RutineContext'
import { EjsByDayContext } from '../../../context/ejsByDay/EjsByDayContext'
import AddToButton from './AddToButton'

const SetRutineThu = () => {

    const { setRutineThu } = useContext(EjsByDayContext)
    const {rutine, clear} = useContext(RutineContext)

    const postThu = () =>{
        setRutineThu(rutine);
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
      color: 'black'
    }}

    onClick={postThu}

    >
      Añandir a Jueves
    
    </div>
  )
}

export default SetRutineThu