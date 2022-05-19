import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nav from './Nav'
import Session from './Session'
import Shared from './Shared'

const Routing = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Shared/>}>
          <Route index element={<Home/>} />
          <Route path="/session" element={<Session/>} />
          </Route>
        </Routes>
      </>
  )
}

export default Routing
