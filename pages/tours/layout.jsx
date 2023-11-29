import React from 'react'
import NavBar from './components/NavBar'

const layout = ({ children }) => {
  
  return (
    <>
    <NavBar />
    <main>{children}</main>
  </>
  )
}

export default layout