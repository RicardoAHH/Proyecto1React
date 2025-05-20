import React from 'react'

export default function Header() {
    return (
        <><div className='flex h-[100px]'>
            < div className='text-[30px] flex font-bold justify-center items-end w-[80%]' >
                <h1>The Creative crew</h1>
            </div >
            <div className='flex items-center justify-center w-[20%]'><img src="/moon.png" alt="moon" width={45} /></div>
        </div>
        </>
    )
}
