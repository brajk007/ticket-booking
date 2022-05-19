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
import {Tooltip,Fab, Modal,TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ChairTwoTone, ScreenshotMonitor } from '@mui/icons-material';
import {v4 as uuidv4} from 'uuid'
import {First,Second,Third} from './data'
import { addItem,handlebook,handleconfirm } from './Slices/movieSlice';
import Timer from './Timer';

console.log(First)

 const ModalStyle = styled(Modal)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
 })

const BoxCard=styled('Box')({
       display:"grid",
       gridTemplateColumns:"340px 340px 340px",
       marginTop:"20px",
       padding:'20px'
       
})

const BoxChair=styled('div')({
     display:"grid",
     gridTemplateColumns:'auto auto auto auto auto auto'
})

const Feed = () => {
  const [open,setOpen] = useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(moviethunk())
  },[])

  const {list,selected,show,total,confirm} = useSelector((state)=>state.movie)
  
  console.log(selected)

  const handleItem=(ele)=>{
     dispatch(addItem(ele))
  }

  const handleBook=()=>{
     dispatch(handlebook())

  }

  const handleConfirm=()=>{
    dispatch(handleconfirm())
  }

  return (
    <Box sx={{textAlign:'center', }} flex={3}>
         <Typography variant='h5' fontWeight={200} >Trending Movies</Typography>
         <BoxCard>
        {
          list.map((ele,i)=>{
            return <>
      <Card key={i} sx={{ maxWidth: 340,margin:"20px" }}>
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
        <Button variant="contained" onClick={()=>setOpen(true)}>BOOK MY SHOW</Button>
        <Button size="small">Share</Button>
      </CardActions>

      { (
         ()=>{
           if (show){
        return <>
         <ModalStyle
             open={open}
             onClose={()=>setOpen(false)}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
           >
             <Box sx={{backgroundColor:'white',width:"400px",height:'400px', borderRadius:'8px',padding:'10px'}}>
             <Typography variant='h6' fontWeight={200} textAlign='center' > III Tier </Typography>
             <BoxChair>
                 {
                 First.map((ele)=>{
                   const color = selected.find((item)=>item.id==ele.id)?"red":'green'
                   return <Box key={ele.id}>
                           <Button onClick={()=>handleItem(ele)} sx={{color:confirm?color:"green"}}  > <ChairTwoTone/> </Button>
                           </Box>
                               
                 })
                 }
               </BoxChair> 
               <Typography variant='h6' fontWeight={200} textAlign='center' > II Tier </Typography>
               <BoxChair>
                 {
                 Second.map((ele)=>{
                  const color = selected.find((item)=>item.id==ele.id)?"red":'green'

                  return <Box key={ele.id}>
                          <Button onClick={()=>handleItem(ele)} sx={{color:confirm?color:"green"}}  > <ChairTwoTone/> </Button>
                          </Box>
                               
                 })
                 }
               </BoxChair>
               <Typography variant='h6' fontWeight={200} textAlign='center' > I Tier </Typography>
               <BoxChair>
                 {
                 Third.map((ele)=>{
                  const color = selected.find((item)=>item.id==ele.id)?"red":'green'

                   return <Box key={ele.id}>
                           <Button onClick={()=>handleItem(ele)} sx={{color:confirm?color:"green"}}  > <ChairTwoTone/> </Button>
                           </Box>
                               
                 })
                 }
               </BoxChair>
                 <Typography variant='h6' fontWeight={300} textAlign='center' marginTop='20px' > <ScreenshotMonitor/> </Typography>
                 <Button variant='contained' onClick={handleBook} sx={{marginLeft:"150px"}} >Book Ticket</Button>
             </Box>
           </ModalStyle> 
            
        </>
           }
          
          if (!show && selected.length>0){
            return <>

        <ModalStyle
             open={open}
             onClose={()=>setOpen(false)}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
           >
             <Box sx={{backgroundColor:'white',width:"400px",height:'400px', borderRadius:'8px',padding:'10px'}}>
                 {selected.map((ele)=>{
                      return <>
                               <Box sx={{textAlign:"center"}}>
                               <span  >{ele.type} : </span>
                          
                                <span style={{marginLeft:"30px"}}>{ele.price}</span><hr/>
                               </Box>
                           </>
                    })}
                   <Typography sx={{marginLeft:"120px"}}>Total Bill : {total}/- Rupees </Typography>
                 <Button variant='contained' onClick={handleConfirm} sx={{marginLeft:"130px",marginTop:"20px"}} >Confirm Booking</Button>
                 <Box sx={{marginLeft:"130px",marginTop:"20px"}}>
                  <Timer/>
                 </Box>
             </Box>
           </ModalStyle> 

                   
                   </>
          }
            
         }

      )() }
     
    </Card>
            </>
          })
        }
       </BoxCard>
    </Box>
  )
}

export default Feed
