import React from 'react'
import style from './PlanesCard.module.css'
import checkmark from './checkmark.png'

const PlanesCard = () => {
    return (
        <div className={style.planesCard}>
            
            <div className={style.planesCardHeader}>
                <div className={style.planesCardHeaderTitle}>Básico</div>
            </div>
            
            <div className={style.planesCardPrice}>Gratis</div>
            <div className={style.planesCardInfo}>
                <img src={checkmark} className={style.checkmark}></img>
                <div>Crea tu propia rutina</div>
            </div>

        </div>


)
}

export default PlanesCard