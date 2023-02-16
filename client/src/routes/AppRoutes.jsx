// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import '../App.css';
// import LandingPage from "../pages/LandingPage";
// import Login from "../pages/Login";
// import Programas from "../pages/Programas";
// import SignUp from "../pages/SignUp";


// export const AppRoutes = () => {
    
//   return (
//     <div className="App">
     
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           {/* <Route path="/inicio" element={<Inicio />} /> */}
//           <Route path="/programas" element={<Programas />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoutes from "./ProtectedRoutes";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import User from "../pages/User";
import UserRoutines from "../pages/UserRoutines";
import SignUp from "../pages/SignUp";
import Ejercicios from "../pages/Ejercicios";


export const AppRoutes = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="*"
    //       element={
    //         <ProtectedRoutes url={"/"}>
    //           <Routes>
    //             <Route exact path="/landingPage" element={<LandingPage />} />
    //           </Routes>
    //         </ProtectedRoutes>
    //       }
    //     />
// {/* 
//         <Route
//           exact
//           path="/"
//           element={
//             <PublicRoute url={"/landingPage"}>
//               <Routes>
//                 <Route exact path="/" element={<LandingPage />} />
//                 <Route exact path="/login" element={<Login />}  />
//               </Routes>
//             </PublicRoute>
//           }
//         /> */}
    //     <Route
    //       path="/"
    //       element={
    //         <PublicRoute url={"/"}>
    //           <Routes>
    //             <Route exact path="/" element={<LandingPage />} />
    //             <Route exact path='/login' element={<Login />} />
    //           </Routes>
    //         </PublicRoute>
    //       }
    //     />



    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        
        <Route element={<ProtectedRoutes/>}>
          <Route element={<User/>} path='user'/>
          <Route element={<UserRoutines/>} path='userRoutines'/>
        </Route>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<SignUp/>}/>
        <Route path='ejercicios' element={<Ejercicios/>}/>

      </Routes>
    </BrowserRouter>
  );
};