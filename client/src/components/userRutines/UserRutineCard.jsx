import React from 'react'

const UserRutineCard = ({info}) => {
  return (<>
  <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%', 
    fontSize:'60%'
  }}
  >
    <div>{info.item.title}</div>

  </div>

</>

  )
}

export default UserRutineCard