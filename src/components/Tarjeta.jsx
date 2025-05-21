import React from 'react'



// export default function Tarjeta(props) {
//     return (
//         <div className=' w-[180px] lg:w-[240px]  flex items-center justify-center flex-wrap relative'>
//             <img className='w-[70%] lg:w-[100%]' src={props.foto} alt="foto" />
//             <div className='w-[100%] h-[100%] absolute'>  <p className='w-[100%] text-black lg:text-2xl rotate-90 h-[100%] absolute right-[10%] -top-2'>{props.puesto}</p></div>
//             <p className='w-[100%] text-black font-bold text-center lg:text-2xl'>{props.nombre}</p>
//         </div>

//     )
// }


export default function Tarjeta({ foto, puesto, nombre }) {
    return (
        <div className=' w-[180px] lg:w-[240px]  flex items-center justify-center flex-wrap relative'>
            <img className='w-[70%] lg:w-[100%]' src={foto} alt="foto" />
            <div className='w-[100%] h-[100%] absolute'>  <p className='w-[100%] text-black lg:text-2xl rotate-90 h-[100%] absolute right-[10%] -top-2'>{puesto}</p></div>
            <p className='w-[100%] text-black font-bold text-center lg:text-2xl'>{nombre}</p>
        </div>

    )
}

