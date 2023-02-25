import React from 'react'
import style from './ejsCard.module.css'
import { motion } from 'framer-motion'


const EjsCard = ({ id, title, description,tester, repetition,series, dificulty, estimatedTime, calories, addItem, removeItem, item, img
}) => {

  const quantity = item.length > 0 ? item[0].quantity: 0;

  return (

    <motion.div 
    initial={{x: '-10vw'}}
    animate={{ x: 0 }}
    // initial={{y: '-5vh'}}
    // animate={{ y: 0 }}
    transition={{ ease: "easeOut", duration: 0.75 }}

    className={style.ejsCard}>

        <div className={style.botonesContainer}>

          {/* <div>{title}</div> */}
           <div className={style.buttons} 
          onClick={() => removeItem(id, quantity-1)}
          >
            Quitar
          </div>
          <div className={style.buttons} onClick={() => addItem({id,tester, title,repetition, description, calories, estimatedTime, series}, quantity+1)}>
            Añadir
          </div>
         

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
          <div>{estimatedTime} MIN</div>
        
        </div>
    
    </motion.div >

  )

}


export default EjsCard



{/* <button onClick={() => addItem({id, title,repetition, description, calories, estimatedTime, series}, quantity+1)}>
agrgar</button>

<button onClick={() => removeItem(id, quantity-1)}>quitar</button> */}

{/* <div>{title}</div>


<div>{series}</div> */}