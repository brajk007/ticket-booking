import { Box, Typography } from '@mui/material';
import React from 'react'

const Sidebar = () => {
  return (
    <Box sx={{textAlign:'center',}} flex={1} >
          <Typography variant='h6' fontWeight={200} >Filter Movies</Typography>
    </Box>
  )
}

export default Sidebar;
