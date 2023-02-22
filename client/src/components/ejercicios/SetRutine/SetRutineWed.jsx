import React, { useContext } from 'react'
import { RutineContext } from '../../../context/counter/RutineContext'
import { EjsByDayContext } from '../../../context/ejsByDay/EjsByDayContext'
import AddToButton from './AddToButton'

const SetRutineWed = () => {

    const { setRutineWed } = useContext(EjsByDayContext)
    const {rutine, clear} = useContext(RutineContext)

    const postWed = () =>{
        setRutineWed(rutine);
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

    onClick={postWed}

    >
      Añandir a Miércoles
    
    </div>
  )
}

export default SetRutineWed