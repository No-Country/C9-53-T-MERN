import React from 'react'
import style from './participantesCards.module.css'
import HomeroSalvadorCorsi from './HomeroSalvadorCorsi.jpg'

const ParticipantesCardHomero = () => {
  return (<>
 <div className={style.card}>
  <img src={HomeroSalvadorCorsi} alt="Avatar" style={{width:"100%", backgroundColor:'white', borderRadius:'10px'}}/>
  <div className={style.container}>
    <h4><b>Homero Salvador Corsi</b></h4>
    <p>Frontend</p>
  </div>
</div> 
</>
  )
}

export default ParticipantesCardHomero