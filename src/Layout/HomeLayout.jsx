import React from 'react'
import Home from '../Page/Home/Home'
import About from '../Page/About/About'

import Education from '../Page/Education/Education'
import Projects from '../Page/Projects/Projects'
import Contact from '../Page/Contact/Contact'
import Footer from '../Page/Footer/Footer'
import Skills from '../Page/Skills/Skills'



const HomeLayout = () => {
  return (
    <div>
      <Home />
      <About></About>

      <Skills/>
      <Education />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default HomeLayout