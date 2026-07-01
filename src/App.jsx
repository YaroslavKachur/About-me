import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../nav/nav'
import Story from '../story/story'
import Hobbies from '../hobbies/hobbies'
import './App.css'
import Projects from '../projects/projects'

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
