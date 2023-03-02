import React from 'react'
import style from './participantesCards.module.css'

const ParticipantesCard = () => {
  return (<>
 <div className={style.card}>
  <img src="img_avatar.png" alt="Avatar" style={{width:"100%", backgroundColor:'white'}}/>
  <div className={style.container}>
    <h4><b>homero Corsi</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> 
</>
  )
}

export default ParticipantesCard