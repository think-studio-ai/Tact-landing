import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ScrollToTop from '@/components/shared/ScrollToTop'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
      <>
          <Navbar/>
          <Outlet />
      <Footer />
      <ScrollToTop/>
    </>
  )
}
