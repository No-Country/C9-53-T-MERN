import React from 'react'
import YellowButton from '../../buttons/YellowButton'
import style from './slidedDiv.module.css'
import Mid from './Mid.png'

const SlidedDivMid = () => {
  return (
    <div 
    className={style.slidedDiv}
    >
        <img src={Mid} className={style.slidedDivImage}>
            
        </img>

        <div className={style.infoDivv}>
            <div>Intermedio</div>
            <div>Realiza ejercicios de dificultad Intermedia</div>
        </div>

        <div className={style.yellowButton}>
            Comenzar Ahora

        </div>
    
    
    
    </div>

  )
}

export default SlidedDivMid