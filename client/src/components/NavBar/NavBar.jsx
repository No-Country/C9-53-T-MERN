import { NavLink, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = ({ user }) => {

  const navigate = useNavigate()

  const url_api = process.env.URL_API || "http://localhost:3030"
  const clickLogout = () => {
    fetch(`${url_api}/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
    window.location.reload()

  }


  return (
    <div className={style.NavBar}>
      <div>
        <NavLink to="/" className={style.logo}>
          FIT HOUSE
        </NavLink>
      </div>
      <div>
        {
          user &&
          <NavLink to="/ejercicios" className={style.ejercicios}>
            Ejercicios
          </NavLink>
        }
        <NavLink to="/questions" className={style.ejercicios}>
          Consultar
        </NavLink>
      </div>

      {
        !user
          ?
          <div>
            <button className={style.btnRegister} onClick={() => navigate("/register")}>Registrarse</button>
            <button className={style.btnSession} onClick={() => navigate("/login")}>Iniciar sesión</button>
          </div>
          :
          <div className={style.container_user}>
            {
              user.user.picture ?
                <>
                  <img className={style.avatar} src={user.user.picture} alt="Foto del perfil" />
                  <div>{user.user.given_name}</div>
                </>
                :
                user.user.name ?
                  <div>{user.user.name}</div>
                  :
                  <div>{user.user.email}</div>
            }
            <button className={style.btnSession} onClick={clickLogout}>Cerrar sesión</button>
          </div>
      }


    </div>
  );
};

export default NavBar;
