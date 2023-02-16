import styles from './bannerEjs.module.css'
import React from 'react'

const BannerEjs = ({info}) => {

  return (
    <div 
    style={{ backgroundImage: `url(${info[0]?.fotoBanner})` }}
    className={styles.bannerEjs}
    >

      <div className={styles.bannerTitle}>
          {info[1].D1}
      </div>

    </div>
  )
}

export default BannerEjs
