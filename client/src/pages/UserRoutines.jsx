import React from 'react'
import EjsCard from '../components/ejercicios/cards/EjsCard';
import NavBar from '../components/NavBar/NavBar'
import { useContext } from 'react';
import {RutineContext} from '../context/counter/RutineContext'
import UserRutineCard from '../components/userRutines/UserRutineCard';


const UserRoutines = () => {


  const { rutine } = useContext(RutineContext);
  

  return (<>


    <NavBar/>

    <div
    style={{color:'white'}}
    >Mis Rutinas</div>

    {rutine.map((rutineItem) => (

    <UserRutineCard

      key={rutineItem.item.id}
      id={rutineItem.item.id}
      title={rutineItem.item.title}
      description={rutineItem.item.description}
      repetition={rutineItem.item.repetition}
      dificulty={rutineItem.item.dificulty}
      estimatedTime={rutineItem.item.estimatedTime}
      calories={rutineItem.item.calories}
      // removeItem={removeItem}

      />
    ))}
    
    </>
  )
}

export default UserRoutines