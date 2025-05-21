import React from 'react'

export default function Header() {
    return (
        <>
            <div className='flex w-full lg:w-[45%] h-[100px]'>
                < div className='text-[30px]  flex font-bold justify-center items-end w-[80%]' >
                    <h1>The Creative crew</h1>
                </div >
                <button className='flex items-center justify-center w-[20%] lg:hidden'><img src="/moon.png" alt="moon" width={45} /></button>
            </div>
        </>
    )
}
