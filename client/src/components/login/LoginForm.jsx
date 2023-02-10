import React from 'react'
import LoginBlackButton from './buttons/LoginBlackButton';
import style from './loginForm.module.css';
import { useContext, useState } from "react";
import { TYPES } from "../../reducers/AuthReducer";
import useForm from "../../custom hooks/useForm";


const LoginForm = () => {

    

  return (     
    <div className={style.loginContainer}>

        <div className={style.loginForm}>

            <form 
            // onSubmit={handleSubmit}
            >

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Usuario:</div>

                    <input
                    placeholder="  Ingresa una dirección de email"
                    type="text"
                    name="email"
                    className={style.login_input}
                    // value={userForm.username}
                    // onChange={handleChange}
                    />

                </div>

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Contraseña:</div>
                    <input
                    placeholder="  Ingresa una dirección de email"
                    type="password"
                    name="password"
                    className={style.login_input}
                    // onChange={handleChange}
                    // value={userForm.password}
                    />

                </div>

            </form>

            <div className={style.logCategory}>
                <div className={style.logCategoryType}>Olvidaste tu contraseña?</div>
            </div>

            <div className={style.logCategory}>
                <LoginBlackButton/>
            </div>


            
        


        </div>
    </div>
  )
}

export default LoginForm;