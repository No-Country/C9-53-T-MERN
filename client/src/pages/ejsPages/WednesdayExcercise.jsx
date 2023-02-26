import React, { useContext } from 'react'
import EjsPagesCards from '../../components/ejsPages/EjsPagesCards'
import NavBar from '../../components/NavBar/NavBar'
import { EjsByDayContext } from '../../context/ejsByDay/EjsByDayContext'
import FinishDayButton from './FinishDayButton'

const WednesdayExcercise = () => {

    const {rutineWed} = useContext(EjsByDayContext)

  return (<>
  
  <NavBar/>

  {rutineWed.map((info) => (

<EjsPagesCards 

  key={info.item.id}
  id={info.item.id}
  title={info.item.title}
  description={info.item.description}
  repetition={info.item.repetition}
  series={info.item.series}
  img={info.item.img}


  />
))}

  <FinishDayButton/>

  </>)

}

export default WednesdayExcercise