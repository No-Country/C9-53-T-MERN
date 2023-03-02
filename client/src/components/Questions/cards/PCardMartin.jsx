import React from 'react'
import style from './participantesCards.module.css'
import matiasCarballo from './Matias Carballo.png'

const PCardMartin = () => {
  return (<>
 <div className={style.card}>
  <img src={matiasCarballo} alt="Avatar" style={{width:"100%", backgroundColor:'white', borderRadius:'10px'}}/>
  <div className={style.container}>
    <h4><b>Matías Carballo</b></h4>
    <p>Team Leader</p>
  </div>
</div> 
</>
  )
}

export default PCardMartin