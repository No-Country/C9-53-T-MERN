import React from 'react'
import style from './Banner.module.css'
// import BannerCard from './banner cards/BannerCard'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'



const Banner = () => {

  const navigate = useNavigate();

  const myListNavigate = () => {
    navigate('/login')
  }

  return (<>
    <div className={style.img}>

      <div className={style.container}>

        <div className={style.bannerUpperDiv}>

          <div className={style.bannerHeader}>El Fitness llegó
            a tu casa </div>
          <div className={style.bannerFooter}>La mejor Plataforma para
            trabajadores remotos</div>
          <div className={style.yellowButton} onClick={myListNavigate}>
            iniciar sesion</div>


        </div>

      </div>

    </div>

    <div className={style.bannerCardContainer}>

      <motion.div 
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}

      className={style.bannerCard}>
        <img  className={style.bannerCardImg}/>
        <span className={style.bannerCardTitle}>Fuerza</span>
        <div className={style.bannerCardBody}>Alcanza tus objetivos con entrenamiento guiado</div>
      </motion.div>

      <motion.div 
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}

      className={style.bannerCard}>
        <img  className={style.bannerCardImg}/>
        <span className={style.bannerCardTitle}>Fuerza</span>
        <div className={style.bannerCardBody}>Alcanza tus objetivos con entrenamiento guiado</div>
      </motion.div>

      <motion.div 
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}

      className={style.bannerCard}>
        <img  className={style.bannerCardImg}/>
        <span className={style.bannerCardTitle}>Fuerza</span>
        <div className={style.bannerCardBody}>Alcanza tus objetivos con entrenamiento guiado</div>
      </motion.div>

      <motion.div 
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}

      className={style.bannerCard}>
        <img  className={style.bannerCardImg}/>
        <span className={style.bannerCardTitle}>Fuerza</span>
        <div className={style.bannerCardBody}>Alcanza tus objetivos con entrenamiento guiado</div>
      </motion.div>
      
    </div>


  </>
  )
}

export default Banner

