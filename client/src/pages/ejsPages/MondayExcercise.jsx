import React, { useContext } from 'react'
import { EjsByDayContext } from '../../context/ejsByDay/EjsByDayContext'

const MondayExcercise = () => {

    const {rutineMon} = useContext(EjsByDayContext)

  return (
    <div
    style={{color:'white'}}
    >
        {rutineMon.map((rutineItem) => (

<div

  key={rutineItem.item.id}
  id={rutineItem.item.id}
  title={rutineItem.item.title}
  // removeItem={removeItem}

  >{rutineItem.item.checks.map((
    check => (
        <div>div</div>
    )
  ))}</div>
))}
    </div>
  )
}

export default MondayExcercise