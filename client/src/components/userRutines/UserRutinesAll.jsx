
import React, { useContext } from 'react'
import style from './userRutineAll.module.css'
import UserRutineCardMon from './accordions/UserRutineCardMonday'
import UserRutineCardTue from './accordions/UserRutineCardTue'
import UserRutineCardWed from './accordions/UserRutineCardWed'
import UserRutineCardThu from './accordions/UserRutineCardThu'
import UserRutineCardFri from './accordions/UserRutineCardFri'
import UserRutineCardSat from './accordions/UserRutineCardSat'
import { EjsByDayContext } from '../../context/ejsByDay/EjsByDayContext'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const UserRutinesAll = () => {

        const {setRutineMon, setRutineTue, 
            setRutineWed,setRutineThu,setRutineFri,
            setRutineSat,setRutineSun} =  useContext(EjsByDayContext)

            const navigate = useNavigate();
  
            const MondayNavigate = () => {
              navigate('/userRoutines/monday')}

            const TuesdayNavigate = () => {
            navigate('/userRoutines/Tuesday')}

            const WednesdayNavigate = () => {
            navigate('/userRoutines/Wednesday')}

            const ThursdayNavigate = () => {
            navigate('/userRoutines/Thursday')}

            const FridayNavigate = () => {
            navigate('/userRoutines/Friday')}

            const SaturdayNavigate = () => {
            navigate('/userRoutines/Saturday')}

            const SundayNavigate = () => {
            navigate('/userRoutines/Sunday')}

  return (<>

    

    < motion.div 
    initial={{x: '10vh'}}
    animate={{ x: 0 }}
    // initial={{y: '-5vh'}}
    // animate={{ y: 0 }}
    transition={{ ease: "easeOut", duration: 0.75 }} className={style.containerDiv}>

        <div  className={style.titleLunes}>Lunes
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardMon/>
                </div>

                <div className={style.comenzar} onClick={MondayNavigate}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineMon([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleMartes}>Martes
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardTue/>
                </div>

                <div className={style.comenzar} onClick={TuesdayNavigate}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineTue([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleMiercoles}>Miercoles
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardWed/>
                </div>

                <div className={style.comenzar} onClick={WednesdayNavigate}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineWed([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleJueves}>Jueves
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardThu/>
                </div>

                <div className={style.comenzar} onClick={ThursdayNavigate}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineThu([])}>Borrar</div>

            </div>

        </div>

        
        <div  className={style.titleViernes}>Viernes
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardFri/>
                </div>

                <div className={style.comenzar} onClick={FridayNavigate}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineFri([])}>Borrar</div>

            </div>

        </div>

        <div  className={style.titleSabado}>Sábado
            <div className={style.accordionContainer}>
                
                <div className={style.accordion}>
                <UserRutineCardSat/>
                </div>

                <div className={style.comenzar} onClick={SaturdayNavigate}>Comenzar</div>
                
                <div className={style.borrar} onClick={()=>setRutineSat([])}>Borrar</div>

            </div>

        </div>

    </motion.div>
</>)
}

export default UserRutinesAll