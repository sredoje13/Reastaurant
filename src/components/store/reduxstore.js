import { createSlice,configureStore } from "@reduxjs/toolkit";
import { useEffect,useState } from "react";


const headerstore=createSlice({
    initialState:{click:true, width:0},
    name:'headerstore',
    reducers:{
     addclicke(state,action){
      state.click=true
    },
    removeclick(state,action){
        state.click=false
    },
    addwidth(state,action){
     state.width=action.payload
    }
}
})
const galerystore=createSlice({
    initialState:{image:"", showimage:false},
    name:'galerystore',
    reducers:{
     addimage(state,action){
    state.image=action.payload
     state.showimage=true
    },
   closeimage(state,action){
    state.showimage=false

   }
    
    }
})
export const store=configureStore({
    reducer:{
        headerstore:headerstore.reducer,
        galerystore:galerystore.reducer
    }
})
export const clickactions=headerstore.actions
export const galeryaction=galerystore.actions