import React from 'react'
import style from './userProfile.module.css'
import profilePic from './profilePic.PNG'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { EjerciciosAbdominalesContext } from '../../context/ejercicios/EjerciciosAbdominalesContext'
import { useEjerciciosAbdominales } from '../../context/ejercicios/EjerciciosAbdominalesProvider'

const UserProfile = () => {

    const {state, logout} = useContext(AuthContext);
    // const {ejercicios} = useContext(EjerciciosContext);
    const ejerciciosAbdominalesInfo = useEjerciciosAbdominales();
    // const ejerciciosAbdominales = useEjerciciosAbdominales();
    // const {ejerciciosAbdominales} = useContext(EjerciciosContext);



    const logger = () =>{
        console.log(ejerciciosAbdominalesInfo[2].title)
    }

  return (
    <div className={style.userProfileConteiner}>

        <img src={profilePic} className={style.profilePic}/>

        <div className={style.profileMoto}>{state.profileMoto}</div>

        <div className={style.rutinasButton}> Mis Rutinas </div>

        <div className={style.rutinasButton}> Crear Rutinas </div>

        <div className={style.rutinasButton} onClick={logout}> Salir </div>

        <div className={style.rutinasButton} 
        onClick={
            logger
        }
        > logger </div>




    </div>
  )
}

export default UserProfile