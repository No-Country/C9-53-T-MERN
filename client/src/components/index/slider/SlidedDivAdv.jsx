import React from 'react'
import YellowButton from '../../buttons/YellowButton'
import style from './slidedDiv.module.css'
import Adv from './Adv.jpg'

const SlidedDivAdv = () => {
  return (
    <div 
    className={style.slidedDiv}
    >
        <img src={Adv} className={style.slidedDivImage}>
            
        </img>

        <div className={style.infoDivv}>
            <div>Avanzado</div>
            <div>Realiza ejercicios de dificultad Avanzada</div>
        </div>

        <div className={style.yellowButton}>
            Comenzar Ahora

        </div>
    
    
    
    </div>

  )
}

export default SlidedDivAdv