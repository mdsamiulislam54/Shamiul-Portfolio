import React from 'react'
import Navbar from '../Page/Navbar/Navbar'
import {Outlet} from 'react-router'
import Footer from '../Page/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout