import style from './loginForm.module.css';
import useForm from "../../custom hooks/useForm";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {

  const navigate = useNavigate();

  const register = () => {
    navigate('/register')
  }

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

        <button className={style.blackButtonCrearCuenta} onClick={register}>
          Crear cuenta
        </button>


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