import React from 'react'

const Login = () => {

  const accessGoogle = () => {
    window.open("http://localhost:3030/auth/google", "_self")
  }

  return (
    <>
      <div>Login</div>
      <button onClick={accessGoogle}>GOOGLE</button>

      <br />
      <br />
      <form action="http://localhost:3030/auth/local" method="POST">
        <input type="text" name="username" placeholder='email' />
        <input type="password" name="password" placeholder='password' />
        <button type='submit'>Iniciar sesión</button>
      </form>


    </>
  )
}

export default Login