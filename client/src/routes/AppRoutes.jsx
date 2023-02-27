import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import User from "../pages/User";
import UserRoutines from "../pages/UserRoutines";
import SignUp from "../pages/SignUp";
import Ejercicios from "../pages/Ejercicios";


export const AppRoutes = ({ user }) => {

  console.log('Desde AppRoutes');
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedRoutes />}>
          <Route element={<User />} path='user' />
          <Route element={<UserRoutines />} path='userRoutines' />
        </Route>

        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={user ? <Navigate to={'/'} /> : <Login />} />
        <Route path='register' element={<SignUp />} />
        <Route path='ejercicios' element={<Ejercicios />} />

      </Routes>
    </BrowserRouter>
  );
};