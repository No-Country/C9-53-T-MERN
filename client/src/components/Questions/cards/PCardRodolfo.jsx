import React from 'react'
import style from './participantesCards.module.css'
import rodolfo from './RodolfoRamirez.jpg'

const PCardRodolfo = () => {
  return (<>
 <div className={style.card}>
  <img src={rodolfo} alt="Avatar" style={{width:"100%", backgroundColor:'white', borderRadius:'10px'}}/>
  <div className={style.container}>
    <h4><b>Rodolfo Ramírez</b></h4>
    <p>UX/UI Designer</p>
  </div>
</div> 
</>
  )
}

export default PCardRodolfo