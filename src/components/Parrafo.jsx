import React from 'react'

export default function Parrafo() {
    return (
        <>
            <div className=' flex flex-col items-start justify-end w-[85%] md:w-[50%] lg:w-[65%] h-[150px]'>
                <h2 className='font-bold text-xl'>Who we are</h2>
                <p className='font-semibold pb-5'>We are team creatively diverse. driven. <br /> innovate individuals working in various <br /> locations from the world.</p>
            </div>
            <div className='lg:flex lg:justify-end lg:items-start lg:w-[40px]'>
                <button className='flex items-center justify-center w-[100%] max-lg:hidden pt-3'><img src="/moon.png" alt="moon" width={245} /></button>
            </div>
        </>
    )
}
