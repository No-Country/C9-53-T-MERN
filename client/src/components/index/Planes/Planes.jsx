import React from 'react'
import style from './Planes.module.css'
import checkmark from './checkmark.png'

const Planes = () => {
  return (
    <article className={style.planesContainer}>
        <div className={style.planesHeader}>Elige tu Plan</div>
        <div className={style.planesCardContainer}>

        <div className={style.planesCard}>
            
            <div className={style.planesCardHeader}>
                <div className={style.planesCardHeaderTitle}>Básico</div>
            </div>
            
            <div className={style.planesCardPrice}>Gratis</div>
            <div className={style.planesCardInfo}>
                <img src={checkmark} className={style.checkmark}></img>
                <div className={style.info}>Crea tu propia rutina</div>
            </div>

            <div className={style.planesCardInfo}>
                <img src={checkmark} className={style.checkmark}></img>
                <div className={style.info}>Hasta 3 rutinas diferentes</div>
            </div>

            <div className={style.planesCardInfo}>
                <img src={checkmark} className={style.checkmark}></img>
                <div className={style.info}>50 ejercicios diferentes</div>
            </div>

        </div>

        <div className={style.planesCard}>
            
            <div className={style.planesCardHeader}>
                <div className={style.planesCardHeaderTitle}>Premium</div>
            </div>
            
            <div className={style.planesCardPrice}>350$ mensual</div>

            <div className={style.planesCardInfo}>
                <img src={checkmark} className={style.checkmark}></img>
                <div className={style.info}>Contacto con profesionales</div>
            </div>

            <div className={style.planesCardInfo}>
                <img src={checkmark} className={style.checkmark}></img>
                <div className={style.info}>Rutinas ilimitadas</div>
            </div>

            <div className={style.planesCardInfo}>
                <img src={checkmark} className={style.checkmark}></img>
                <div className={style.info}>80 ejercicios diferentes</div>
            </div>

        </div>


        </div>



    </article>

  )
}

export default Planes