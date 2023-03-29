import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Aboutme from './component/Aboutme'
import Skill from './component/Skill'
import Project from './component/Project'
import Contact from './component/Contact'


function App() {
 
  return (
    <>
    <Navbar/>
    <Header/>
    <Aboutme/>
    <Skill/>
    <Project/>
    <Contact />
    </>
   
  )
}

export default App
