import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './assets/nav/nav'
import Story from './assets/story/story'
import Hobbies from './assets/hobbies/hobbies'
import './App.css'
import Projects from './assets/projects/projects'

function App() {
  

  return (
    <>
    <Nav></Nav>

    <Routes>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/' element={<Story/>}/>
      <Route path='/hobbies' element={<Hobbies/>}/>
    </Routes>
    </>
  )
   }
export default App
