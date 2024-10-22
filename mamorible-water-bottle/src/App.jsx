import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/header/Header'
import Bottles from './assets/components/header/Bottles/Bottles'

function App() {

  return (
    <>
      <Header></Header>
      <Bottles></Bottles>
    </>
  )
}

export default App