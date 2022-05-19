import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { moviethunk } from './Thunk/moviethunk';
import { styled } from '@mui/material';


const BoxCard=styled('Box')({
       display:"grid",
       gridTemplateColumns:"340px 340px 340px",
       marginTop:"20px",
       padding:'20px'
       
})

const Movie = () => {
    const list = useSelector((state)=>state.movie.list)
  return (
    <Box sx={{textAlign:'center', }} flex={3}>
    <Typography variant='h5' fontWeight={200} >All Movies</Typography>
    <BoxCard>
   {
     list.map((ele)=>{
       return <>
               <Card sx={{ maxWidth: 340,margin:"20px" }}>
 <CardMedia
   component="img"
   alt="Movie"
   height="140"
   image={ele.Poster}
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {ele.Title}
   </Typography>
   <Typography variant="body2" color="text.secondary">
      {ele.Year}
   </Typography>
 </CardContent>
 <CardActions sx={{textAlign:'center'}}>
   <Button variant="contained">BOOK MY SHOW</Button>
   <Button size="small">Share</Button>
 </CardActions>
</Card>
       </>
     })
   }
  </BoxCard>
</Box>
  )
}

export default Movie
