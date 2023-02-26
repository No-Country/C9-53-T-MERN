import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'

const Questions = () => {

    const [question, setQuestion] = useState();
    const handleSubmit = (e) =>{
        e.preventDefault();
        // const quest = {question};
        window.location.replace(`http://wa.me/45621354?text=${question}`);
    };

  return (
    <>
        <NavBar/>
        <div
        style={{
            color:'white',
            width:'100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            
        }}
        
        >
            Envía tu consulta y nustros profesionales te responderán a la brevedad
        </div>
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%', 
          }}
        >
        <form onSubmit={handleSubmit}
                               style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%', 
                                marginTop:'1rem',
                              }}>
            <textarea
                style={{
                    width:'90%',
                    height:'20vh',
                    fontSize:'120%'
                }}
                type='text'
                required
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            >

            </textarea>

            <button
            style={{
                color:'white',
                backgroundColor:'black',
                marginTop:'1rem',
                padding:'5px 5px 5px',
                borderRadius:'5px'
            }} 

                >
                Enviar Pregunta
        
            </button>

        </form>
        </div>

    </>
  )
}

export default Questions