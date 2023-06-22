import React from 'react';
import Im1 from "./CFK_JELOVNIK-2 1.png"
import Im2 from "./CFK_JELOVNIK-3 1.png"
import Im3 from "./CFK_JELOVNIK-4 1.png"
import Im4 from "./CFK_JELOVNIK-5 1.png"
import Im5 from "./CFK_JELOVNIK-6 1.png"
import Im6 from "./CFK_JELOVNIK-7.jpg"
import Sec from "./Section 2.png"
import Sec2 from "./Section 3.png"
import {FaArrowCircleDown} from "react-icons/fa"
import { useState } from 'react';
import styled from "./Meni.css"
import { useSelector } from 'react-redux';
function Meni(props) {
    const setwidth=useSelector((state)=>state.headerstore.width)
    const is500=setwidth>500?true:false
    const[changing,setchanging]=useState(false)
    const images=[Sec,Im1,Im2,Im3,Im4,Im5,Im6, Sec2]
    const [index2,setindex2]=useState(0)
    const [index,setIndex]=useState(1)
    const[ischangingbefore,setischangingbefore]=useState
    (false)
    const[isover,setisover]=useState(false)
    function onChangepage(){
        setchanging(true)
        setisover(false)
        setTimeout(()=>{
            setchanging(false)
            setindex2(index2+1)
            setIndex(index+1)
           
            if(index2>images.length-2){
                setIndex(1)
                
            }
        },1000)
        if(index2===images.length-2){
            setindex2(images.length-1)
            setisover(true)
        }
    }
function pagebefore(){
    if(index2===images.length-1){
        setIndex(1)
        setindex2(0)
        setisover(false)
    }
    else{
        if(index2===0){
            setIndex(1)
            setindex2(0)
        }
        else{
            setischangingbefore(true)
            setTimeout(()=>{
                setischangingbefore(false)
                setindex2(index2-1)
                setIndex(index-1)
               
                if(index2>images.length-2){
                    setIndex(1)
                    
                }
            },1000)
        }
   
    }
} 
const clicktoscroll=(x)=>{
const element=document.getElementById(`img${x+1}`)
var elementPosition = element.getBoundingClientRect().top;
var offsetPosition = elementPosition + window.pageYOffset ;
  
window.scrollTo({
     top: offsetPosition,
     behavior: "smooth"
});
}
const clicktotop=(x)=>{
    const element=document.getElementById(`img0`)
    var elementPosition = element.getBoundingClientRect().top;
var offsetPosition = elementPosition + window.pageYOffset ;
  
window.scrollTo({
     top: offsetPosition,
     behavior: "smooth"
});
}
const buttons=["Predjela,salate i supe","Vege obroci i Plodovi mora",
"Preporucena jela","Salate i Dezerti","Variva, Sirevi i Peciva","Dorucak"]
const buttonsforsmall=buttons.map((item,i)=>(
    <button key={item} onClick={()=>clicktoscroll(i)} className='buttonsmall'>
    {item} 
</button>
))
const imagesmallres=images.map((item,i)=>(
    <img key={item}
     src={item} 
     alt="menu" 
     onClick={(i)=>{clicktotop(i)}}
     id={`img${i}`} className='img'/>

))

    return (
        <div className="menu">
      
        <h1>ZAVIRITE U NAS  MENI</h1>
        {is500&&<p className="p-meni">Kliknite da biste promenili stranu  <FaArrowCircleDown className='icon'/></p>
            }
        {is500&&<div className="listdiv">  
       <div  className="imagediv"
        > 
          <img 
        src={images[index2-1||0]} alt="" className='img2'/>
      <div style={{animation:ischangingbefore?"before 1s":"",
        }}> <img 
        style={{animation:ischangingbefore?"imgflip2 1s":"",
    }}
        className="sec" src={images[index2]} 
        onClick={()=>pagebefore()}
        alt="sec"/></div>
        <div >
        </div>
       
         </div>


        <div  className="imagediv"
        style={{display:isover?"none":'flex'}}
        > 
        <img 
        src={images[!ischangingbefore?index+1:index]} alt="" className='img2'/>
       
        <div style={{animation:changing?"next 1s":"",
         
        }}>
        <img
         onClick={()=>onChangepage()} 
       style={{animation:changing?"imgflip 1s":"",
      zIndex:ischangingbefore?"-1520":"auto",
       }}
        src={images[index]} alt="meni" className="img"/>
        </div>
       
         </div>
         </div>}
     { !is500&&<div className='smalldivmenu'>
     <div className='buttondivmeni'>{buttonsforsmall}</div>
      {imagesmallres}
       </div>}
        </div>
    );
}

export default Meni;