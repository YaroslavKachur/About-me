import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './assets/nav/nav'
import Story from './assets/story/story'
import Hobbies from './assets/hobbies/hobbies'
import './App.css'

function App() {
  

  return (
    <>
    <Nav></Nav>

    <Routes>
      <Route path='/projects' element={"not ready"}/>
      <Route path='/' element={<Story/>}/>
      <Route path='/hobbies' element={<Hobbies/>}/>
    </Routes>
    </>
  )
   }
export default App
