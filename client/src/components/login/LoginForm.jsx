// La página contiene dos Login Form; la primera versión (activa) es un versión funcional 
// para acceder a las features (rutas protegidas) y presentar la demo; la otra está conectada al backend y es responsive, pero todavía
// no está 100% integrada


import React from 'react'
import style from './loginForm.module.css';
import useForm from "../../custom hooks/useForm";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {

    const navigate = useNavigate();
  
    const register = () => {
      navigate('/register')}

    const { userForm, handleChange, handleSubmit } = useForm(AuthContext);

  return (     
    <div className={style.loginContainer}>

        <div className={style.loginForm}>

            <form 
            onSubmit={handleSubmit}
            >

                <div className={style.logCategory}>
                    <div className={style.logCategoryType}>Email:</div>

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

            <button type="submit" className={style.blackButton}>
              Iniciar sesión
            </button>

            </form>

            {/* <button className={style.blackButtonCrearCuenta} onClick={register}>
              Crear cuenta
            </button> */}
            

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


// import style from './loginForm.module.css';
// import { useNavigate } from 'react-router-dom';



// const LoginForm = () => {

//   const navigate = useNavigate();

//   const register = () => {
//     navigate('/register')
//   }

//   const url_api = process.env.URL_API || "https://fit-house.onrender.com"
//   const clickGoogle = () => {
//     window.open(`${url_api}/auth/google`, "_self")
//   }

//   const clickFacebook = () => {
//     window.open(`${url_api}/auth/facebook`, "_self")
//   }

//   return (
//     <div className={style.background}>
//       <div className={style.loginContainer}>

//         <div className={style.loginForm}>

//           <h1 className={style.title}>Iniciar sesión</h1>

//           <div className={style.container}>

//             <form
//               method='POST' action={`${url_api}/auth/local`}
//             >

//               <div className={style.logCategory}>

//                 <div className={style.logCategoryType}>Dirección de e-mail</div>

//                 <input
//                   placeholder="Ingresa una dirección de email"
//                   type="text"
//                   id="username"
//                   name="username"
//                   className={style.login_input}
//                 />

//               </div>

//               <div className={style.logCategory}>

//                 <div className={style.logCategoryType}>Contraseña:</div>
//                 <input
//                   placeholder="Ingresa una contraseña"
//                   type="password"
//                   id="password"
//                   name="password"
//                   className={style.login_input2}
//                 />

//               </div>

//               <div className={style.logCategory}>

//                 <div className={style.logCategoryType2}>¿Olvidaste tu contraseña?</div>

//               </div>

//               <button type="submit" className={style.blackButton}>
//                 Iniciar sesión
//               </button>

//             </form>

//             <button className={style.blackButtonCrearCuenta} onClick={register}>
//               Crear cuenta
//             </button>

//             <div className={style.subtitle}>O ingresa con</div>

//             <div className={style.containerLogos}>
//               <div className={style.google} onClick={clickGoogle} />
//               <div className={style.facebook} onClick={clickFacebook} />
//             </div>

//           </div>



//         </div>
//       </div>
//     </div>

//   )
// }

// export default LoginForm;