
import React, { useContext } from 'react'
import style from './userRutineAll.module.css'
import UserRutineCardMon from './accordions/UserRutineCardMonday'
import UserRutineCardTue from './accordions/UserRutineCardTue'
import UserRutineCardWed from './accordions/UserRutineCardWed'
import UserRutineCardThu from './accordions/UserRutineCardThu'
import UserRutineCardFri from './accordions/UserRutineCardFri'
import UserRutineCardSat from './accordions/UserRutineCardSat'
import { EjsByDayContext } from '../../context/ejsByDay/EjsByDayContext'

const UserRutinesAll = () => {

        const {setRutineMon, setRutineTue, 
            setRutineWed,setRutineThu,setRutineFri,
            setRutineSat,setRutineSun} =  useContext(EjsByDayContext)


  return (<>

    

    <div className={style.containerDiv}>

        <div  className={style.titleLunes}>Lunes
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardMon/>
                </div>

                <div className={style.comenzar}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineMon([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleMartes}>Martes
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardTue/>
                </div>

                <div className={style.comenzar}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineTue([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleMiercoles}>Miercoles
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardWed/>
                </div>

                <div className={style.comenzar}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineWed([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleJueves}>Jueves
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardThu/>
                </div>

                <div className={style.comenzar}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineThu([])}>Borrar</div>

            </div>

        </div>

        
        <div  className={style.titleViernes}>Viernes
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardFri/>
                </div>

                <div className={style.comenzar}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineFri([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleSabado}>Sábado
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardSat/>
                </div>

                <div className={style.comenzar}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineSat([])}>Borrar</div>

            </div>

        </div>

    </div>
</>)
}

export default UserRutinesAll