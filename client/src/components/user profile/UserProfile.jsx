import React from 'react'
import style from './userProfile.module.css'
import profilePic from './profilePic.PNG'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";


const UserProfile = () => {

  const {state, logout} = useContext(AuthContext);

  const navigate = useNavigate();
  
  const myRutinesNavigate = () => {
    navigate('/userRoutines')}

  const ejsNavigate = () => {
    navigate('/ejercicios')}


  return (
    <div className={style.userProfileConteiner}>

        <img src={profilePic} className={style.profilePic}/>

        <div className={style.profileMoto}>{state.profileMoto}</div>

        <div className={style.rutinasButton} onClick={myRutinesNavigate}> Mis Rutinas </div>

        <div className={style.rutinasButton} onClick={ejsNavigate}> Crear Rutinas </div>

        <div className={style.rutinasButton} onClick={logout}> Salir </div>

        <div className={style.rutinasButton}> logger </div>




    </div>
  )
}

export default UserProfile