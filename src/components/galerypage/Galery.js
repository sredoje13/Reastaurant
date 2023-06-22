import React from 'react';
import styled from "./galery.css"
import { useDispatch, useSelector } from 'react-redux';
import Pictures from './pictures';
import {SlClose} from "react-icons/sl"
import { galeryaction } from '../store/reduxstore';
import Logo from "./Logo-Restoran-Studnja 1.png"
function Galery(props) {
    const showimage=useSelector((state)=>state.galerystore.showimage)
    const imageforshow=useSelector((state)=>state.galerystore.image)
    const dispatch=useDispatch()
    const image=showimage?(
        <div className='oneimagediv'> 
        <div className='oneimageclose'>
            <button
            style={{color:'white'}}
             onClick={()=>dispatch(galeryaction.closeimage())}><SlClose fontSize="x-large"/></button>
        </div>
        <img className="oneimage"src={imageforshow} alt='showone'/></div>
   ):""
    return (
        <div className='galery' style={showimage?{background:"#000000d5"}:{}}>
     
       <div className='galery-topimage'>
            <img src={Logo} className='spinlogo' alt=""/>
       </div>
       {image}
       <h1 style={{color:"rgb(151, 116, 18)",
       fontWeight:"1000",
       fontFamily:"'Kaushan Script', cursive"}}>POGLEDAJTE NASU GALERIJU </h1>
           <div style={showimage?{opacity:"0.3"}:{}} >
          
           <Pictures/>
          
           </div>
        </div>
    );
}

export default Galery;