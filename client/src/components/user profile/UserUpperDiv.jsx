import React from 'react'
import style from './UserUpperDiv.module.css'
import runningPic from './humanRunning.jpg'

const UserUpperDiv = () => {
  return (
    <div className={style.UserUpperDivContainer}>

        <div className={style.UserUpperDivLeftConteiner}>
            <div
            className={style.UserUpperDivLeftConteinerHigh}
            > 
                <div className={style.infoContainerAltura}>
                    Altura
                </div>
                <div className={style.infoContainerAlturaInt}>
                    1.85 mts
                </div>

            </div>
            
            <div
            className={style.UserUpperDivLeftConteinerLow}
            > 
                <div className={style.infoContainerAltura}>
                    Peso
                </div>
                <div className={style.infoContainerAlturaInt}>
                    70 KG
                </div>

            </div>
            

        </div>
        <div className={style.pic}/>
    </div>
  )
}

export default UserUpperDiv