import React from 'react'
import style from './ejsCard.module.css'

const EjsCard = ({ id, title, description, repetition, dificulty, estimatedTime, calories, addItem, removeItem, item
}) => {

  const quantity = item.length > 0 ? item[0].quantity: 0;

  return (

    <div className={style.ejsCard}>

        <div>{title}</div>

        <button onClick={() => addItem({id, title,repetition, description, calories, estimatedTime}, quantity+1)}>
          agrgar</button>

        <button onClick={() => removeItem(id, quantity-1)}>quitar</button>
    
    </div>

  )

}


export default EjsCard