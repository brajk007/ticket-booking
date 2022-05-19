import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const moviethunk=createAsyncThunk('movie/fetch',
  
   async()=>{
      const res =  await axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman')
      return res.data;
   }
)