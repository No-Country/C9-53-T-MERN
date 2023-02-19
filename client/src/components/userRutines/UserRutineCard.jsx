import React from 'react'

const UserRutineCard = ({title,repetition,estimatedTime}) => {
  return (<>
  <div
  style={{
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '100%',
    gap: '1rem'
  }}
  >
    <div>{title}</div>
    <div>{repetition} unidades</div>
    <div>{estimatedTime} minutos</div>
  </div>

</>

  )
}

export default UserRutineCard