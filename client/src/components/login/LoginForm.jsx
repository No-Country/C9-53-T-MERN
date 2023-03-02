import style from './loginForm.module.css';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {

  const navigate = useNavigate();

  const register = () => {
    navigate('/register')
  }

  const url_api = process.env.URL_API || "https://fit-house.onrender.com"
  const clickGoogle = () => {
    window.open(`${url_api}/auth/google`, "_self")
  }

  const clickFacebook = () => {
    window.open(`${url_api}/auth/facebook`, "_self")
  }

  return (
    <div className={style.background}>
      <div className={style.loginContainer}>

        <div className={style.loginForm}>

          <h1 className={style.title}>Iniciar sesión</h1>

          <div className={style.container}>

            <form
              method='POST' action={`${url_api}/auth/local`}
            >

              <div className={style.logCategory}>

                <div className={style.logCategoryType}>Dirección de e-mail</div>

                <input
                  placeholder="Ingresa una dirección de email"
                  type="text"
                  id="username"
                  name="username"
                  className={style.login_input}
                />

              </div>

              <div className={style.logCategory}>

                <div className={style.logCategoryType}>Contraseña:</div>
                <input
                  placeholder="Ingresa una contraseña"
                  type="password"
                  id="password"
                  name="password"
                  className={style.login_input2}
                />

              </div>

              <div className={style.logCategory}>

                <div className={style.logCategoryType2}>¿Olvidaste tu contraseña?</div>

              </div>

              <button type="submit" className={style.blackButton}>
                Iniciar sesión
              </button>

            </form>

            <button className={style.blackButtonCrearCuenta} onClick={register}>
              Crear cuenta
            </button>

            <div className={style.subtitle}>O ingresa con</div>

            <div className={style.containerLogos}>
              <div className={style.google} onClick={clickGoogle} />
              <div className={style.facebook} onClick={clickFacebook} />
            </div>

          </div>



        </div>
      </div>
    </div>

  )
}

export default LoginForm;