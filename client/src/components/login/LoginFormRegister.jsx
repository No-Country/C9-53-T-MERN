import React from 'react'
import LoginBlackButton from './buttons/LoginBlackButton';
import style from './LoginFormRegister.module.css';
import useForm from "../../custom hooks/useForm";
import { AuthContext } from '../../context/AuthContext';
import BackButton from './buttons/BackButton';
import { useNavigate } from 'react-router-dom';


const LoginFormRegister = () => {

    const navigate = useNavigate();
  
    const registerNavigate = () => {
      navigate('/user')}

    const { userForm, handleChange, handleSubmit } = useForm(AuthContext);

  return (     
    <div className={style.loginContainer}>

        <div className={style.loginForm}>

            <BackButton/>

            <form 
            onSubmit={handleSubmit}
            >

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Correo electrónico:</div>

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
                    <div className={style.logCategoryType}>Nombre de usuario</div>

                    <input
                    placeholder="  Ingresa un nombre de usuario"
                    type="text"
                    name="username"
                    className={style.login_input}
                    value={userForm.username}
                    onChange={handleChange}
                    />

                </div>

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Contraseña:</div>
                    <input
                    placeholder="  Ingresa tu contraseña"
                    type="password"
                    name="password"
                    className={style.login_input}
                    onChange={handleChange}
                    value={userForm.password}
                    />

                </div>    

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Lema / Frase motivadora</div>

                    <input
                    placeholder="Profile Moto"
                    type="text"
                    name="profileMoto"
                    className={style.login_input}
                    value={userForm.profileMoto}
                    onChange={handleChange}
                    />

                </div>

                {/* <div className={style.logCategory}>
                    <div className={style.logCategoryType}>profilePhoto:</div>

                    <input
                    placeholder="First monkey"
                    type="text"
                    name="profilePhoto"
                    className={style.login_input}
                    value={userForm.profilePhoto}
                    onChange={handleChange}
                    />
                    <input 
                        type="file"
                        name="profilePhoto"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                        value={userForm.profilePhoto}
                        >
                    </input>

                </div> */}

            <button type="submit" className={style.blackButton}>
              Crear cuenta
            </button>

            </form>



{/* 
            <div className={style.logCategory}>
                <LoginBlackButton/>
            </div> */}


            
        


        </div>
    </div>
  )
}

export default LoginFormRegister;