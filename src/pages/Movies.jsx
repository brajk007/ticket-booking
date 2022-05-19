import { Box, Stack } from '@mui/material';
import React from 'react'
import Footer from '../components/Footer';
import Movie from '../components/Movie';
import Sidebar from '../components/Sidebar';

const Movies = () => {
  return (
    <Box>
       <Stack  direction='row' spacing={2} justifyContent='space-between' sx={{marginTop:"20px"}} >
           <Sidebar/>
           <Movie/>
      </Stack>  
      <Footer/>
    </Box>
  )
}

export default Movies;
