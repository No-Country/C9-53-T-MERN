import React from 'react'
import LoginBlackButton from './buttons/LoginBlackButton';
import style from './loginForm.module.css';
import { useContext, useState } from "react";
import { TYPES } from "../../reducer/authReducer";
import useForm from "../../custom hooks/useForm";
import { AuthContext } from '../../context/AuthContext';


const LoginForm = () => {

    const { userForm, handleChange, handleSubmit } = useForm(AuthContext);

  return (     
    <div className={style.loginContainer}>

        <div className={style.loginForm}>

            <form 
            onSubmit={handleSubmit}
            >

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Usuario:</div>

                    <input
                    placeholder="  Ingresa una dirección de email"
                    type="text"
                    name="email"
                    className={style.login_input}
                    value={userForm.email}
                    onChange={handleChange}
                    />

                </div>

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Contraseña:</div>
                    <input
                    placeholder="  Ingresa una dirección de email"
                    type="password"
                    name="password"
                    className={style.login_input}
                    onChange={handleChange}
                    value={userForm.password}
                    />

                </div>    

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Usuario:</div>

                    <input
                    placeholder="Prophile Moto"
                    type="text"
                    name="profileMoto"
                    className={style.login_input}
                    value={userForm.profileMoto}
                    onChange={handleChange}
                    />

                </div>

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>profilePhoto:</div>

                    <input
                    placeholder="First monkey"
                    type="text"
                    name="profilePhoto"
                    className={style.login_input}
                    value={userForm.profilePhoto}
                    onChange={handleChange}
                    />
                    {/* <input 
                        type="file"
                        id="profilePhoto" 
                        name="profilePhoto"
                        accept="image/png, image/jpeg">
                    </input> */}

                </div>


            <button type="submit">
              Iniciar sesión
            </button>

            </form>

            <div className={style.logCategory}>
                <div className={style.logCategoryType}>Olvidaste tu contraseña?</div>
            </div>


{/* 
            <div className={style.logCategory}>
                <LoginBlackButton/>
            </div> */}


            
        


        </div>
    </div>
  )
}

export default LoginForm;