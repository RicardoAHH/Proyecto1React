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
      <Header />
      <div className='flex justify-center ml-5'><Parrafo /></div>
      <div className=' grid grid-cols-2  place-items-center'>
        {arrayInfo.map((e, index) => (
          <div key={index} className={`${index % 2 !== 0 ? 'mt-15' : '-mt-15'}`}>
            <Tarjeta foto={e.img} puesto={e.puesto} nombre={e.name} />
          </div>
        ))}</div>

    </>
  )
}

export default App
