import React from 'react'

const Login = () => {

  const accessGoogle = () => {
    window.open("http://localhost:3030/auth/google", "_self")
  }

  return (
    <>
      <div>Login</div>
      <button onClick={accessGoogle}>GOOGLE</button>
    </>
  )
}

export default Login