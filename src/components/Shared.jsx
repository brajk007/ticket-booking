import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Shared = () => {
  return (
     <>
      <Nav/>
     <Outlet/>
     </>
        
  )
}

export default Shared
