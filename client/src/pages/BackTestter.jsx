import React, { useEffect, useState } from 'react'



const BackTestter = () => {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch('http://localhost:3030/ExercisesAbs').then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                // console.log(data)
            }
        )
        
    }, [])

    const loger = () =>{
        console.log(backendData)
    }

  return (
    <div
    style={{
        color:'white',
        width: '150px',
        height: '200px'
    }}

    onClick={loger}
    
    >

    button
    </div>
  )
}

export default BackTestter      


// {(
//             backendData.users.map((user, i) => (
//                 <p key={i}>{user} </p>
//             ))
//         )}
        