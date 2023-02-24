import React from 'react'

const ChoosedRutineCard = ({info, removeItem}) => {
  return (
  <>     <div 
  style={{
  marginTop: '0.1rem',
  padding:'0.5rem 0.75rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems:'center',
  height: '3rem',
  width:'100%',
  borderRadius: '20px',
  backgroundColor: '#FCBD3C',
  color: 'black'}}>
      <div 
        style={{marginRight:'0.5rem'}}
       >{info.item.title}</div>
       <div
       style={{marginRight:'0.5rem'}}
       >({info.item.estimatedTime}min)   </div>
       <h1
       style={{cursor:'pointer'}}
       onClick={() => removeItem(info.item.id, info.item.quantity-1)}
       >Quitar</h1>
       
</div>
  </>)
}

export default ChoosedRutineCard

// {rutine.map((rutineItem) => (

//     <UserRutineCard

//     key={rutineItem.item.id}
//     id={rutineItem.item.id}
//     title={rutineItem.item.title}
//     description={rutineItem.item.description}
//     repetition={rutineItem.item.repetition}
//     dificulty={rutineItem.item.dificulty}
//     estimatedTime={rutineItem.item.estimatedTime}
//     calories={rutineItem.item.calories}
//     // removeItem={removeItem}

//     />
//     ))}