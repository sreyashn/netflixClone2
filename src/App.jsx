import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { originals,action } from './urls'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'



function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/> 

    </>
  )
}

export default App
