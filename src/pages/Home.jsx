import { Box, Stack } from '@mui/material'
import React from 'react'
import Carousel from '../components/Carousel'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Box>
       <Carousel/>
       <Stack  direction='row' spacing={2} justifyContent='space-between' sx={{marginTop:"20px"}} >
           <Sidebar/>
           <Feed  />
      </Stack> 
      <Footer/> 
    </Box>
  )
}

export default Home
