import React from 'react'
import style from './participantesCards.module.css'
import manuel from './Manuel Ramirez.jpg'

const PCardManuel = () => {
  return (<>
 <div className={style.card}>
  <img src={manuel} alt="Avatar" style={{width:"100%", backgroundColor:'white', borderRadius:'10px'}}/>
  <div className={style.container}>
    <h4><b>Manuel Ramírez</b></h4>
    <p>Backend developer</p>
  </div>
</div> 
</>
  )
}

export default PCardManuel