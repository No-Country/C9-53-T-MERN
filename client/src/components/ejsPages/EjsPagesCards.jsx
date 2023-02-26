import style from './ejsPagesCard.module.css'
import { motion } from 'framer-motion'
import React, { useState } from 'react'


const EjsPagesCards = ({id, title, description,repetition,series,
     item, img}) => {

        const [checks, setChecks] = useState(0);

        const checkSerie = () => {
            setChecks(prevCount => prevCount + 1)
        }


  return (
    
    // <div className={style.cardContainer}>
    <motion.div 
    initial={{x: '-10vw'}}
    animate={{ x: 0 }}
    // initial={{y: '-5vh'}}
    // animate={{ y: 0 }}
    transition={{ ease: "easeOut", duration: 0.75 }}

    className={style.ejsCard}>

        <div className={style.botonesContainer}>
            <div className={style.buttons} onClick={checkSerie}>Marcar Serie </div> 
            
        </div>

        <div className={style.checksContainer}>
            {checks}
        </div>

        <div className={style.minContainer}>
          {title} 
        </div>

        {/* <div className={style.imageContainer}> */}
          <img className={style.img} src={img}/>
          {/* </div> */}


        <div className={style.infoContainer}>

          <div>{series} series</div>
          <div className={style.middleInfo}>x {repetition} repeticiones</div>
        
        </div>
    
    </motion.div >
    // </div>

  )

}


export default EjsPagesCards
