import React from 'react'
import './globals.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import  Tech from './components/Tech'
import Projects from './components/Project'


const page = () => {
  return (
    <div>
      
     <Navbar/>
     <Hero/>
     <About/>
     <Tech/>
     <Projects/> 
     <Contact/>
  
    </div>
  )
}

export default page