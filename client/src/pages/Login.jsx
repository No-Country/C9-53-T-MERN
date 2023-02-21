import React from 'react'
import LoginForm from '../components/login/LoginForm'
import NavBar from "../components/NavBar/NavBar";


const Login = () => {

  const accessGoogle = () => {
    // window.open("http://localhost:3030/auth/google", "_self")
  }
  return (<>
    <NavBar />
    <LoginForm />
  </>
  )
}

export default Login