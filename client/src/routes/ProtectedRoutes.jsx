import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const ProtectedRoutes = ({ children, url }) => {
  const { state } = useContext(AuthContext);

  // if (state.isAuth) {
  //   return children;
  // }

  // return <Navigate to={url} />;
  return(
    state.isAuth ? <Outlet/> : <Navigate to='/login'/>
  )
};

export default ProtectedRoutes;