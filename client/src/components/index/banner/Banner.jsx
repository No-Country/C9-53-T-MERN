import React from 'react'
import style from './Banner.module.css'
// import BannerCard from './banner cards/BannerCard'
import foto from './img_pesa.jpg'
import { useNavigate } from 'react-router-dom'



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

      <div className={style.bannerCard}>
        {/* <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/> */}
        {/* <span className={style.bannerCardTitle}>Fuerza</span> */}
        {/* <div className={style.bannerCardBody}>Alcanza tus objetivos con entrenamiento guiado</div> */}
      </div>

      <div className={style.bannerCard}>
        {/* <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/> */}
        {/* <span className={style.bannerCardTitle}>Personalización</span> */}
        {/* <div className={style.bannerCardBody}>Encuentra tu rutina a tu propio ritmo</div> */}
      </div>

      <div className={style.bannerCard}>
        {/* <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/> */}
        {/* <span className={style.bannerCardTitle}>Salud</span> */}
        {/* <div className={style.bannerCardBody}>Acompaña el fitness con una vida saludable</div> */}
      </div>

      <div className={style.bannerCard}>
        {/* <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/> */}
        {/* <span className={style.bannerCardTitle}>Balance</span> */}
        {/* <div className={style.bannerCardBody}>Ejercita siguiendo pasos a tu medida</div> */}
      </div>
    </div>


  </>
  )
}

export default Banner

