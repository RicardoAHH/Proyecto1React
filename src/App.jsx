import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header'
import Parrafo from './components/Parrafo'
import Tarjeta from './components/Tarjeta'
import { arrayInfo } from './array.js'



function App() {
  return (
    <>
      <div className="lg:flex "><Header />
        <div className='w-full lg:w-[50%] flex justify-center lg:justify-end ml-5'><Parrafo />
        </div>
      </div>
      <div className=' grid grid-cols-2 lg:grid-cols-3 place-items-center'>
        {arrayInfo.map((e, index) => (
          <div key={index} className={`${index % 2 !== 0 ? 'mt-15' : '-mt-15'} ${index === 1 || index === 4 ? 'lg:mt-15' : 'lg:-mt-15'}`}>
            <Tarjeta foto={e.img} puesto={e.puesto} nombre={e.name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
