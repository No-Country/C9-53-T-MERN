import React from 'react'
// import ImageSlider from '../slider/ImageSlider'
import style from './UpperGifSection.module.css'

const UpperGifSection = () => {
  return (
    <div className={style.upperGifSection}>
        <div className={style.title}>CONOCÉ EL ENTRENAMIENTO HIT</div>
        <div className={style.info}>El entrenamiento HIIT se enfoca en ráfagas cortas de ejercicio 
        intenso. Es perfecto si tienes poco tiempo. Tiene una serie de beneficios relacionados con
         la pérdida de peso,la mejora del rendimiento y la condición cardiovascular.</div>

        
        <div className={style.imageSlider}>image</div>


    </div>
  )
}

export default UpperGifSection