import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../Slices/movieSlice";


export const store = configureStore({
        reducer:{
           movie:movieSlice
        }
})