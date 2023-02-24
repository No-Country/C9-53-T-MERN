import React from 'react'
import { useNavigate } from 'react-router-dom'


const CreateRutineButton = () => {

    const navigate = useNavigate();
  
    const createRutineButtonUser = () => {
    navigate('/ejercicios')}

  return (
    <div
    style={
        {
            backgroundColor: 'var(--color-yellow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:'50%',
            marginLeft:'25%',
            position:'absolute',
            top:'62vh',
            padding:'5px 5px 5px',
            borderRadius:'20px',
            cursor:'pointer'
        }
    }
    onClick={createRutineButtonUser}
    >Crear Rutina</div>
  )
}

export default CreateRutineButton