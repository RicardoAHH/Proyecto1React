import React from 'react'



export default function Tarjeta({ foto, puesto, nombre }) {
    return (
        <div className=' w-[150px] h-[200px] flex flex-wrap relative'>
            <img className='w-30' src={foto} alt="foto" />
            <div className='w-5 absolute'>  <p className=' rotate-90 w-30 h-8 mt-12 ml-18'>{puesto}</p></div>
            <p className='w-[100%] font-bold'>{nombre}</p>
        </div>

    )
}




