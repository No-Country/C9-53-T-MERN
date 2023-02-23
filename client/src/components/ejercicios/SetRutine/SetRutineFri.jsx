import React, { useContext } from 'react'
import { RutineContext } from '../../../context/counter/RutineContext'
import { EjsByDayContext } from '../../../context/ejsByDay/EjsByDayContext'
import AddToButton from './AddToButton'
import { motion } from "framer-motion";


const SetRutineFri = () => {

    const { setRutineFri } = useContext(EjsByDayContext)
    const {rutine, clear} = useContext(RutineContext)

    const postFri = () =>{
        setRutineFri(rutine);
        clear();

    }

  return (

    <motion.div 
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    style={{
      marginTop: '0.5rem',
      padding:'0.1rem 0.75rem',
      display: 'flex',
      justifyContent: 'column',
      alignItems:'center',
      height: '3rem',
      width:'100%',
      borderRadius: '20px',
      backgroundColor: '#FCBD3C',
      color: 'black'
    }}

    onClick={postFri}

    >
      Añandir a Viernes
    
    </motion.div>
  )
}

export default SetRutineFri