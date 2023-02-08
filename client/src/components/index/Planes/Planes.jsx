import React from 'react'
import style from './Planes.module.css'
import PlanesCard from './planes card/PlanesCard'

const Planes = () => {
  return (
    <article className={style.planesContainer}>
        <div className={style.planesHeader}>Elige tu Plan</div>
        <div className={style.planesCardContainer}>
            <PlanesCard/>
            <PlanesCard/>
        </div>



    </article>

  )
}

export default Planes