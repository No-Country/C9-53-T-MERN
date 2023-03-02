import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './loginFormRegister.module.css';

const LoginFormRegister = () => {
  const url_api = process.env.URL_API || "https://fit-house.onrender.com"
  // const url_api = process.env.URL_API || "http://localhost:3030"

  const [hidden, setHidden] = useState(false)

  const navigate = useNavigate()

  const clickGoogle = () => {
    window.open(`${url_api}/auth/google`, "_self")
  }

  const clickFacebook = () => {
    window.open(`${url_api}/auth/facebook`, "_self")
  }

  const clickContinue = () => setHidden(true)

  const clickRegister = () => {

    const inputMail = document.querySelector('#username').value
    const inputPassword = document.querySelector('#password').value

    fetch(`${url_api}/users`, {
      method: 'POST',
      body: JSON.stringify({ email: inputMail, password: inputPassword }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 1) {
          alert('Ya puede iniciar sesión')
          navigate('/login')
        } else if (res.code === 2) {
          alert('Ya existe el correo')
        }
      })
  }

  return (
    <>
      <div className={style.background}>
        <div className={style.loginContainer}>

          <div className={style.loginForm}>

            <h1 className={style.title}>Crear una cuenta</h1>

            <div className={style.container}>

              <div className={style.logCategory}>

                <div className={style.logCategoryType}>Dirección de e-mail</div>

                <input
                  placeholder="Ingresa una dirección de email"
                  type="email"
                  id="username"
                  name="username"
                  className={style.login_input}
                  required
                />

              </div>

              {
                !hidden ?
                  <button className={style.blackButton} onClick={clickContinue}>
                    Continuar
                  </button >
                  :

                  <>

                    <div className={style.logCategory}>

                      <div className={style.logCategoryType}>Contraseña:</div>
                      <input
                        placeholder="Ingresa una contraseña"
                        type="password"
                        id="password"
                        name="password"
                        className={style.login_input2}
                        required
                      />

                    </div>

                    <button className={style.blackButton} onClick={clickRegister}>
                      Registrarse
                    </button >
                  </>

              }

              {
                !hidden &&

                <>
                  <div className={style.subtitle}>
                    O ingresa con
                  </div>
                  <div className={style.containerLogos}>
                    <div className={style.google} onClick={clickGoogle} />
                    <div className={style.facebook} onClick={clickFacebook} />
                  </div>
                </>
              }

            </div>



          </div>
        </div>
      </div>
    </>

  )
}

export default LoginFormRegister;