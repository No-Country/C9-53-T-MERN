import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { EjsByDayContext } from '../../../context/ejsByDay/EjsByDayContext'
import style from './UserRutineCard.module.css'



const UserRutineCardTue = () => {

  const {rutineTue} = useContext(EjsByDayContext)
  const [isOpen, setIsOpen] = useState(false)

  return (<>
  <div>
    <motion.div 
    
    transition={{layout:{duration:1, type:'spring'}}}
    Layout 
    onClick={() => setIsOpen(!isOpen)} 
    className={style.button}>
      <motion.div layout='position'> Rutina</motion.div>
      {isOpen &&(
        <motion.div 
        
        
        className={style.UserRutineCard}>{rutineTue.map((rutineItem) => (

          <div
      
            key={rutineItem.item.id}
            id={rutineItem.item.id}
            title={rutineItem.item.title}
      
            >{rutineItem.item.title}</div>
          ))}</motion.div>
      )}
    </motion.div>
  </div>

</>

  )
}

export default UserRutineCardTue