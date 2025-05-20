import React from 'react'


// export default function Tarjeta({ foto, puesto, nombre }) {
//     return (
//         <div className=' w-[150px] h-[200px] flex flex-wrap relative ml-10'>
//             <img className='w-30' src={foto} alt="foto" />
//             <div className='w-5 absolute'>  <p className=' rotate-90 w-30 h-8 mt-12 ml-18'>{puesto}</p></div>
//             <p className='w-[100%] font-bold'>{nombre}</p>
//         </div>

//     )
// }

// import React from 'react'

export default function Tarjeta2({ foto, precio, descuento, meses, nombre }) {
    return (
        <div className=' w-[150px] h-[200px] flex flex-col relative ml-10'>
            <img className='w-30' src={foto} alt="foto" />
            <p className='w-[100%] font-bold text-[15px]'>{nombre}</p>
            <p className='text-[15px]'>{precio}</p>
            <p className='text-[15px] text-green-700'>{descuento}</p>
            <p className='text-[15px]'>{meses}</p>
        </div>
    )
}

