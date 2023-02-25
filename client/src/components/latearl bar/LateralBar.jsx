import React from 'react'
import style from './lateralBar.module.css'

const LateralBar = () => {
  return (
    <div
    // style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   }}
    className={style.lateralBarContainer}
    >
        <div className={style.lateralBarHeader}>dsd</div>
        <div className={style.lateralBarDiv}>Ver Perfil </div>
        <div className={style.lateralBarDiv}>Editar Perfil</div>
        <div className={style.lateralBarDiv}>Planes Displonibles</div>
        <div className={style.lateralBarDiv}>Cerrar Sesión</div>
    
    </div>
  )
}

export default LateralBar