import React from 'react'
import Home from '../Page/Home/Home'
import About from '../Page/About/About'
import Service from '../Page/Service/Service'
import Skills from '../Page/Skills/Skills'
import Education from '../Page/Education/Education'
import Projects from '../Page/Projects/Projects'
import Contact from '../Page/Contact/Contact'
import Footer from '../Page/Footer/Footer'

const HomeLayout = () => {
  return (
    <div>
        <Home/>
        <About></About>
        <Service/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
    
    </div>
  )
}

export default HomeLayout