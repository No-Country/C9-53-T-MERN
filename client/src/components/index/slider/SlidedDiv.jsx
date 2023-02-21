import React from 'react'
import YellowButton from '../../buttons/YellowButton'
import style from './slidedDiv.module.css'

const SlidedDiv = () => {
  return (
    <div 
    className={style.slidedDiv}
    >
        <div className={style.slidedDivImage}>
            
        </div>

        <div className={style.infoDiv}>
            <div 
            style={{
                marginTop:'2px',
                fontWeight:'bolder',
                fontSize:'120%'
            }}

            >Principiante</div>
            <div>Realiza ejercicios de dificultad inicial</div>
        </div>

        <div className={style.yellowButton}>
            Comenzar Ahora

        </div>
    
    
    
    </div>

  )
}

export default SlidedDiv