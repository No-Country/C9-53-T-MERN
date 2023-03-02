import React from 'react'
import style from './participantesCards.module.css'
import martina from './martinaNimcowicz.jpg'

const PCardMartina = () => {
  return (<>
 <div className={style.card}>
  <img src={martina} alt="Avatar" style={{width:"100%", backgroundColor:'white', borderRadius:'10px'}}/>
  <div className={style.container}>
    <h4><b>Martina Nimcowicz</b></h4>
    <p>UX/UI Designer</p>
  </div>
</div> 
</>
  )
}

export default PCardMartina