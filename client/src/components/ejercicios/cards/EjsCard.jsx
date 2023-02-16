import React from 'react'
import style from './ejsCard.module.css'

const EjsCard = ({
    id, title, description, repetition, dificulty, estimatedTime, calories
}) => {

  return (

    <div className={style.ejsCard}>

        <div>{title}</div>
    
    </div>

  )

}


export default EjsCard