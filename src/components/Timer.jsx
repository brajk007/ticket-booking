import { Typography } from '@mui/material';
import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { clearList } from './Slices/movieSlice';

const Timer =()=>{
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[min,setMin]=useState(5);
  const[sec,setSec]=useState(60);
  var timer;
 useEffect(()=>{
timer=setInterval(()=>{

  if(min!==0){
    if(sec){setSec(sec-1)
    }else if(sec==0){setSec(100-40)
    setMin(min-1)
    }else if(min==0){setSec(0)}
 }
      switch(min){
        case 0:
          setSec(0)
          navigate('/session')
          dispatch(clearList())
          break
      }

},1000)
return ()=>clearInterval(timer)
 })
return <div>

<Typography varient="h3" fontWeight={200} >Session Expiration Time </Typography >
   <h2>{min}:{sec}</h2>

</div>
}
export default Timer;