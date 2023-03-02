import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import style from './lateralBar.module.css'
import { useNavigate } from 'react-router-dom'

const LateralBar = () => {


  const {logout} = useContext(AuthContext)

  const navigate = useNavigate();
  
  const navigateUserProfile = () => {
    navigate('/user')}

  return (
    < motion.div 
    initial={{y: '-10vh'}}
    animate={{ y: 0 }}
    // initial={{y: '-5vh'}}
    // animate={{ y: 0 }}
    transition={{ ease: "easeOut", duration: 0.75 }}
    // style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   }}
    className={style.lateralBarContainer}
    >
        <div className={style.lateralBarHeader}></div>

        <div className={style.lateralBarDivContainer}>
        <div className={style.lateralBarDiv} onClick={navigateUserProfile} >Ver Perfil </div>
        <div className={style.lateralBarDiv}>Editar Perfil</div>
        <div className={style.lateralBarDiv}>Planes Displonibles</div>
        <div className={style.lateralBarDiv} onClick={logout}>Cerrar Sesión</div>
        </div>

    </motion.div>
  )
}

export default LateralBar