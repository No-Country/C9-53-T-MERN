import React from 'react'
import YellowButton from '../../buttons/YellowButton'
import style from './slidedDiv.module.css'
import Mid from './Mid.png'
import { useNavigate } from 'react-router-dom'

const SlidedDivMid = () => {

    const navigate = useNavigate();
  
    const ejerciciosNavigate = () => {
      navigate('/ejercicios')}

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

        <div             
        onClick={ejerciciosNavigate}
        className={style.yellowButton}>
            Comenzar Ahora
        </div>
    
    
    
    </div>

  )
}

export default SlidedDivMid