import React from 'react'
import Banner from '../Page/Banner/Banner'
import AboutUs from '../Page/AboutUs/AboutUs'
import Skills from '../Page/Skills/Skills'

const Home = () => {
  return (
    <div>
        <section>
            <Banner/>
        </section>
        <section className='py-20'>
          <AboutUs/>
        </section>
        <section className='py-20'>
          <Skills/>
        </section>
    </div>
  )
}

export default Home