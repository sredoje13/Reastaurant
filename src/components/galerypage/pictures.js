import Im1 from "./club.jpg"
import Im2 from "./club2.jpg"
import Im3 from "./club3.jpg"
import Im4 from "./club4.jpg"
import Im5 from "./coctel5.jpeg"
import Im6 from "./coctel2.jpg"
import Im7 from "./coctel3.jpg"
import Im8 from "./coctel4.jpg"
import React from 'react';
import Im9 from "./garden1.jpg"
import Im10 from "./garden2.jpg"
import Im11 from "./garden3.jpg"
import Im12 from "./garden4.jpg"
import Im13 from "./restaurant.jpg"
import Im14 from "./restaurant2.jpg"
import Im15 from "./restaurant3.jpg"
import Im16 from "./restaurant4.jpg"
import { useDispatch } from "react-redux"
import styled from "./galery.css"
import { useSelector } from "react-redux"
import { galeryaction } from "../store/reduxstore"




function Pictures(props) {
    const dispatch=useDispatch()
    const imgs=[Im1,Im2, 
        Im3,Im4,Im5, Im6,Im7, 
        Im8, Im9, Im10,Im11,
         Im12,Im13, Im14, 
         Im15, Im16].map((item)=>(
            <div className="galeryitem"
            onClick={()=>dispatch(galeryaction.addimage(item))}
             key={item}>
            <img className="galeryimg"  src={item} alt="item"/>
            </div>
         ))
    return (
        <div className='galery-container'>
           {imgs} 
        </div>
    );
}

export default Pictures;