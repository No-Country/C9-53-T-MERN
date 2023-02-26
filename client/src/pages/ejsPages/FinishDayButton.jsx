import React, { useEffect, useState } from 'react'
import style from './FinishDayButton.module.css'
import ReactConfetti from 'react-confetti'

const FinishDayButton = () => {

    const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight})
    const [Btn, setBtn] = useState(false);

    const detectSize = () =>{
        setDimension({width: window.innerWidth, height: window.innerHeight})

    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return()=>{
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension]);

  return (<>
    <div
    onClick={()=> setBtn(!Btn)}
    className={style.FinishDayButton}
    >Completar Día</div>
    {Btn && <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={1000}
/>}
  </>)
}

export default FinishDayButton