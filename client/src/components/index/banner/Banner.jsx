import React from 'react'
import style from './Banner.module.css'
import BannerCard from './banner cards/BannerCard'
import YellowButton from '../../buttons/YellowButton'

const Banner = () => {

  

  return (
    <div className={style.img}>
        <div className={style.container}/>

          <span className={style.bannerUpperSpan}>
            <div className={style.bannerHeader}>El Fitness llegó 
            <p>  a tu casa</p> </div>
            <div className={style.bannerFooter}>La mejor Plataforma para
            <p> trabajadores remotos</p></div>
            <YellowButton/>
          </span>

            <div className={style.bannerCardContainer}>
  
              <BannerCard/>
              <BannerCard/>
              <BannerCard/>
              <BannerCard/>

            </div>
    </div>

  )
}

export default Banner