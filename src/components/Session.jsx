import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Session = () => {
  return (
    <Box  sx={{textAlign:'center',marginTop:"100px"}}>
       <Typography variant='h2' >Session Time Expired</Typography>
       <Typography variant='h4' >Please Try Again</Typography>
      <Button variant='contained' sx={{marginTop:'50px'}} > <Link style={{color:"white"}}  to='/'>Go Back To Home</Link></Button>
    </Box>
  )
}

export default Session;
