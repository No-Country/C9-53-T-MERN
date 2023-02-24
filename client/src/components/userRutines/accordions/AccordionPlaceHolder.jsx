import React from 'react'
import UserRutineCard from '../UserRutineCard'
import { motion } from "framer-motion";


const AccordionPlaceHolder = ({rutine}) => {
  return ( <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
        {rutine.map(info => (
    <UserRutineCard   
    key={info.item.id}
    id={info.item.id} 
    info={info} 

    />
  ))}

  </motion.div>
)
}

export default AccordionPlaceHolder