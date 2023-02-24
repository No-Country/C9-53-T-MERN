
import React from 'react'
import { MonAccordion } from './accordions/MonAccordion'
import style from './userRutineAll.module.css'

const UserRutinesAll = () => {
  return (<>

    <div className={style.misRutinas}> Mis Rutinas</div>

    <div className={style.lunesContainer}>Lunes</div>
        <div className={style.diaContainer}>
            <MonAccordion/>
        </div>

</>)
}

export default UserRutinesAll