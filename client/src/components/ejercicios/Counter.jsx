import React from 'react'
import style from './counter.module.css'
import { RutineContext } from '../../context/counter/RutineContext';
import { useContext } from 'react';

const Counter = () => {

  const { clear, quantityRutine, caloriesRutine, minutesRutine } = useContext(RutineContext);


  return (<>
  <div className={style.counterContainer}>
    <div className={style.counterContainer}>{minutesRutine}</div>
    <div className={style.counterContainer}>{caloriesRutine}</div>
    <div className={style.counterContainer}>{quantityRutine}</div>
  </div>
    </>
  )
}

export default Counter