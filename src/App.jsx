import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header'
import Parrafo from './components/Parrafo'
import Tarjeta from './components/Tarjeta'




function App() {
  return (
    <>
      <Header />
      <div className='flex justify-center ml-5'><Parrafo /></div>
      <Tarjeta foto="/recursos/images/photo1.png" puesto="Product Owner" nombre="Bil Mahoney" />

    </>

  )
}

export default App
