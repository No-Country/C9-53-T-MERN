import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { RutineContext } from "../../../context/counter/RutineContext";
import UserRutineCard from "../../userRutines/UserRutineCard";
import ChoosedRutineCard from "./ChoosedRutineCard";
import { ChoosedRutines } from "./ChoosedRutines";





const ContentPlaceholder = () =>{    

    const {rutine, removeItem} = useContext(RutineContext);


return(
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="content-placeholder"
    >
          {rutine.map(info => (
      <ChoosedRutineCard   
      key={info.item.id}
      id={info.item.id} 
      info={info} 
      removeItem={removeItem}
      />
    ))}

    </motion.div>

)
      }

      export default ContentPlaceholder