import React from 'react'
import EjsCard from '../components/ejercicios/cards/EjsCard';
import NavBar from '../components/NavBar/NavBar'
import { useContext } from 'react';
// import {RutineContext} from '../context/counter/RutineContext'
import UserRutineCard from '../components/userRutines/accordions/UserRutineCardMonday';
import { EjsByDayContext } from '../context/ejsByDay/EjsByDayContext';
import { useNavigate } from "react-router-dom";


  



const UserRoutines = () => {


  const {rutineMon, rutineTue, rutineWed, rutineThu,
  rutineFri, rutineSat, rutineSun} = useContext(EjsByDayContext)
  // const { rutine } = useContext(RutineContext);  
  
  const navigate = useNavigate();
  
  const MondayNavigate = () => {
    navigate('/login')}
  

  return (<>


    <NavBar/>

    <div
    style={{color:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', 
  }}
    >Mis Rutinas

    <div>Lunes</div>
    {rutineMon.map((rutineItem) => (

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

  <div>Martes</div>
      {rutineTue.map((rutineItem) => (

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

<div>Miercoles</div>
      {rutineWed.map((rutineItem) => (

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

<div>Jueves</div>
      {rutineThu.map((rutineItem) => (

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

<div>Viernes</div>
      {rutineFri.map((rutineItem) => (

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

<div>Sábado</div>
      {rutineSat.map((rutineItem) => (

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

<div>Domingo</div>
      {rutineSun.map((rutineItem) => (

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


    </div>
    </>
  )
}

export default UserRoutines