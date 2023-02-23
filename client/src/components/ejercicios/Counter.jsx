import React from 'react'
import style from './counter.module.css'
import { RutineContext } from '../../context/counter/RutineContext';
import { useContext } from 'react';
import SetRutineMon from './SetRutine/SetRutineMon';
import SetRutineTue from './SetRutine/SetRutineTue';
import SetRutineWed from './SetRutine/SetRutineWed';
import SetRutineThu from './SetRutine/SetRutineThu';
import SetRutineFri from './SetRutine/SetRutineFri';
import SetRutineSat from './SetRutine/SetRutineSat';

const Counter = () => {

  const { clear, quantityRutine, caloriesRutine, minutesRutine, repetitionRutine } = useContext(RutineContext);


  return (<>

  <div className={style.dataContainer}>

      <div className={style.counterContainer}>
        
        <div>{minutesRutine}</div>
        <div>{quantityRutine}</div>
        <div>{caloriesRutine}</div>

      </div>

    </div>

<div className={style.dataContainer}>

<div className={style.infoContainer}>
  
  <div>Minutos</div>
  <div>Ejercicios</div>
  <div>Calorias</div>

</div>

</div>


    </>
  )
}

export default Counter