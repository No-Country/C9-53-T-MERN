import React from 'react'
import { useContext } from 'react';
import NavBar from '../components/NavBar/NavBar'
import CreateRutineButton from '../components/user profile/buttons/CreateRutineButton';
import UserProfile from '../components/user profile/UserProfile';
import UserUpperDiv from '../components/user profile/UserUpperDiv';
import { AuthContext } from '../context/AuthContext';
import style from './user.module.css'

const User = () => {

    
  const { state } = useContext(AuthContext);

  return (<>
  <NavBar/>


  <UserUpperDiv/>
  <CreateRutineButton/>
  <div className={style.rutinaDelDia}>Rutina del día </div>
  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

  <div className={style.dayContainer}>
    <div>Hola</div>
    <div>hola</div>

  </div>

    </>
  )
}

export default User