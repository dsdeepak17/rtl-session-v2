import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import useHeaderFooterHeight from '../../hooks/useHeaderFooterHeight'

function MainLayout() {
  // const { headerHeight, footerHeight } = useHeaderFooterHeight();

  return (
    <>
      <Header />
      <div style={{ height: '100vh' }}>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout