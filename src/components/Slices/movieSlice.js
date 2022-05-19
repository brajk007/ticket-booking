import { createSlice } from "@reduxjs/toolkit";
import { moviethunk } from "../Thunk/moviethunk";


const initialState={
    list:[],
    selected:[],
    show:true,
    total:0,
    confirm:false
}

export const movieSlice = createSlice({
          name:'movies',
          initialState,
          reducers:{
               addItem:(state,action)=>{
                 
               const items = state.selected.find((ele)=>ele.id==action.payload.id)
                if (items)
                  {
                     alert('Seat is Already booked please choose other seat')
                  }
                 else{
                  state.selected.push(action.payload)
                  state.confirm=false
                 }
                  
               },
               handlebook:(state)=>{
                 state.show=false
                 let total =0 ;
                 state.selected.forEach((ele)=>{
                    total+=(ele.price)
                 })
                 state.total=total;
                
               },
               handleconfirm:(state)=>{
                  state.show=true
                  state.confirm=true
                  alert('You booked ticket Successfully')
               },
               clearList:(state)=>{
                  state.selected=[]
               }
          },
       extraReducers:(builder)=>{
         builder.addCase(moviethunk.fulfilled,(state,action)=>{
             state.list = action.payload.Search
            console.log(action.payload.Search);
         })
       }
})

export const {addItem,handlebook,handleconfirm,clearList}  = movieSlice.actions;

export default movieSlice.reducer;