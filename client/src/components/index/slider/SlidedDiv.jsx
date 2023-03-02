import React from 'react'
import YellowButton from '../../buttons/YellowButton'
import style from './slidedDiv.module.css'
import easy from './Easy.png'

const SlidedDiv = () => {
  return (
    <div 
    className={style.slidedDiv}
    >
        <img src={easy} className={style.slidedDivImage}>
            
        </img>

        <div className={style.infoDivv}>
            <div>Principiante</div>
            <div>Realiza ejercicios de dificultad inicial</div>
        </div>

        <div className={style.yellowButton}>
            Comenzar Ahora

        </div>
    
    
    
    </div>

  )
}

export default SlidedDiv