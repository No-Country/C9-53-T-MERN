
import React from 'react'
import { RutineContext } from "../../../context/counter/RutineContext";
import style from './newRutineStyle.module.css'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ChoosedRutineCard from './ChoosedRutineCard';
import ContentPlaceholder from './ChoosedRutinesPlaceholder';




    const Accordion = ({ i, expanded, setExpanded }) => {
        const isOpen = i === expanded;
      
        // By using `AnimatePresence` to mount and unmount the contents, we can animate
        // them in and out while also only rendering the contents of open accordions
        return (
          <>
            <motion.div
            // style={{
            //     color:'white'
            // }}
            className={style.newRutineStyle}
              initial={false}
              animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
              onClick={() => setExpanded(isOpen ? false : i)}
            >Ver Elegidos</motion.div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                      <ContentPlaceholder/>
                </motion.section>
              )}
            </AnimatePresence>
          </>
        );
      };

      export const ChoosedRutines = () => {
        // This approach is if you only want max one section open at a time. If you want multiple
        // sections to potentially be open simultaneously, they can all be given their own `useState`.
        const [expanded, setExpanded] = useState(0);
      
        return (
        
          <Accordion  expanded={expanded} setExpanded={setExpanded} >
        </Accordion>
        // ))
        );
      };

