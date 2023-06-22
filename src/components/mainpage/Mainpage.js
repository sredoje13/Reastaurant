import styled from './MAinpage.css'
import React, { useState,useEffect} from 'react';
import {MdOutlineEmail,MdLocalPhone} from "react-icons/md"
import {BiMap} from "react-icons/bi"
import Image0 from "./Coquette-by-Josh-Jamison-627568873aa86-scaled.webp"
import Image1 from "./Prequel-lead.webp"
import Image2 from "./28160-desk-restaurant-wine-glasses-plates-flowers-roses-4k.jpg"
import Image3 from "./pexels-chan-walrus-941861.jpg"
import Image4 from "./fruits-natural-foods-fruit-food-wallpaper-preview.jpg"
import Image6 from "./cookie-4k-backgrounds-for-widescreen-wallpaper-preview.jpg"
import Image5 from "./3692584.jpg"
import Image7 from "./custom-designs3-1200-800.jpg"
import Image8 from "./space-saving-tips-banner.jpg"
import Image9 from "./staff-cooking-in-restaurant-commercial-kitchen.jpg"
import Image10 from "./sydney-restaurants-woodcut.png"
import Image11 from "./desktop-wallpaper-amazing-food-full-size-restaurant-food.jpg"
import Image12 from "./986759.jpg"
import Image13 from "./8300573.jpg"
import Image14 from "./Desktop-Food-HD-Wallpapers-Free-Download.jpg"
import Image15 from "./fruits-natural-foods-fruit-food-wallpaper-preview.jpg"
import aboutimage from "./teletina-kao-ispod-saca-2-2.JPG"
import Torta from "./cokoladnatorta.jpeg"
import Meze1 from "./meze1.jpg"
import Meze2 from "./meze2.jpg"
import {CgChevronLeft} from "react-icons/cg"
import {CgChevronRight} from "react-icons/cg"
import {SlArrowLeft} from 'react-icons/sl'
import {SlArrowRight} from 'react-icons/sl'
import { CSSTransition } from 'react-transition-group'
import {IoRestaurantSharp} from "react-icons/io5"
import {TransitionGroup} from 'react-transition-group'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
function Mainpage(props) {
const width=useSelector((state)=>state.headerstore.width)
const[restart,setrestart]=useState(false)
const[index,setindex]=useState(0)
const[commentindex,setcommentindex]=useState(0)
const[imgindex,setimgindex]=useState(0)
const[classwrapper,setclasswrapper]=useState("")
const setwidth=width>500?500:width<350?180:300
useEffect(()=>{
    const interval = setInterval(() => {
     setindex(index+1)
     if(index===3){
        setindex(0)
       }
    }, 4000);
      return () => clearInterval(interval);
},[ index])


const arrrayofdivs=[[Image0,Image1,Image2,Image3],
[Image4,Image5,Image6,Image7],
[Image8,Image9,Image10,Image11],
[Image12,Image13,Image14,Image15]]


function leftfunction(){
    setimgindex(imgindex-1)
    setclasswrapper("leftclass")
   
}
function rightfunction(){
    setimgindex(imgindex+1)
    setclasswrapper("rightclass")
   
}
const commentitem=[
    {
        comment:"Odlicna usluga, najbolja hrana, sve pohvale za konobare!!!",
        name:"Ivan",
    
    },
    {
        comment:"Nikad ukusnija i bolja teletina!!! Korektno i ljubazno osoblje!",
        name:"Marija",
    },
    {   comment:"Nikad  lepsi provod i usluga, ccista desetka!",
         name:"Nikola",
        },
    {   comment:"Lep ambijent, divna hrana, sve na mestu, prelepi kolaci.",
         name:"Jovana",}]
const comments=commentitem.map((item,i)=>(
        <div className='onecomment' key={i}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <IoRestaurantSharp style={{marginLeft:"5px"}} />
        <p className='pcomment'>{item.comment}</p>
        <IoRestaurantSharp style={{marginRight:"5px"}}/></div>
            
            <h1>{item.name}</h1>
        </div>
     ))
     const onecomments=document.getElementsByClassName("onecomment")
     
     function movecommentright(){
         
       if(commentindex===commentitem.length-1){
        for(let onecoment=0;onecoment<onecomments.length;onecoment++){
            onecomments[onecoment].style.transform=`translateX(0px)`
        }
        setcommentindex(0)
       }
       else{
        setcommentindex(commentindex+1)
        for(let onecoment=0;onecoment<onecomments.length;onecoment++){
            onecomments[onecoment].style.transform=`translateX(${(commentindex+1)*-setwidth}px)`
        }
       }
     }
     function movecommentleft(){
        if(commentindex===0){
            setcommentindex(0)
            for(let onecoment=0;onecoment<onecomments.length;onecoment++){
                onecomments[onecoment].style.transform=`translateX(0px)`
            }
           }
           else{
            setcommentindex(commentindex-1)
            for(let onecoment=0;onecoment<onecomments.length;onecoment++){
                onecomments[onecoment].style.transform=`translateX(${(commentindex-1)*-setwidth}px)`
            }
           }
     }
    
    return (
        <div>
        <div className='imgdiv'>
        <div className="wrapper"

        >
        <TransitionGroup>
            <CSSTransition
            classNames={classwrapper}
    timeout={2000}
    key={[arrrayofdivs]}
            >
             <img className="images"src={arrrayofdivs[imgindex][index]}
          style={restart?{animationName:"none"}:{animationName:"image"}}  
          alt="profilepage"/>
            </CSSTransition>
        </TransitionGroup>
        </div>
        
           <div className='buttondiv'>
           <button disabled={imgindex===0} onClick={leftfunction}><SlArrowLeft fontSize="400%"/></button>
            <button onClick={rightfunction}  disabled={imgindex===arrrayofdivs.length-1}><SlArrowRight fontSize="400%"/></button>
           </div>
         

            </div>
         <div className='aboutpage'>
         <div className="aboutpage1">
         <h1>Restoran najukusnije hrane</h1>
            <h2>HRANA NEVEROVATNOG UKUSA</h2>
            <p>Potpuni uzitak za vas koji imate ukusa i nas koji zelimo da vam svaki zalogaj bude iznenadjenje!</p>
         <div className='linkdiv'>
            <NavLink className="aboutlink" to="/Meni">
                POGLEDAJTE NAS MENI
            </NavLink>
         </div>
         </div>
           <img className='imgabout1'  src={aboutimage} alt="aboutimage"/>
         </div>
        <div className='aboutpage' style={{background:"white"}}>
        <div>
         <img className='meze1' src={Meze1} alt="meze1"/>

          <img  className='meze2'src={Meze2} alt="meze2"/>
        </div>
     <div className='aboutpage2'>
<h1>DOMACA HRANA</h1>
<p>Svakodnevno na nasu trpezu dolaze domaci sir,kajmak,prsuta,sveze meso
i razni drugi proizvodi. Peciva,proje i pite pravljene su po tradicionalnim receptima.Dorucak kakav pozelite
i usluga koja se ne propusta!!!</p>
<div className='linkdiv'style={{borderColor:"black"}} >
            <NavLink className="navlink2" to="/Meni">
                POGLEDAJTE NAS MENI
            </NavLink>
         </div>
     </div>
        </div>
        <div className='aboutpage about3' 
        style={{background:"rgb(207, 207, 207)"}}>
        
        <div className="aboutpage3">
         <h1>Domaci kolaci</h1>
            <p>O nasim kolacima uveliko se prica,
            omiljene poslastice isto su pazljivo pravljene, kao i ostala jela,
            po tradicionalnom receptu. Ne smete propustiti da probate cokoladnu tortu,
            kolac sa malinama,krempitu, princess krofne, strudle i razne kolace iz nase ponude!</p>
         <div className='linkdiv' style={{borderColor:"black"}}>
            <NavLink className="navlink2" to="/Meni">
                POGLEDAJTE NAS MENI
            </NavLink>
         </div>
         </div>
         <img src={Torta} className='cake' alt="torta"/>
        </div>
        <div className='fiximage'>
        <h1>REZERVACIJE</h1>
        <h2>060/7420567</h2>
       <NavLink className="fix-link"to="./Kontakt">Kontankt</NavLink>
        </div>
        <div className='commentdiv' >
        <h1>Utisci nasih gostiju</h1>
        <div className='comments'>
          <button  className='left' onClick={movecommentleft}>
          <CgChevronLeft/>
          </button>
          <div className='commentWrapper'>
         {comments}
          </div>
          <button className={width<350?"right":"left"}  onClick={movecommentright}>
          <CgChevronRight/>
          </button>
        </div>
        </div>
      
        <div className='aboutpage' style={{background:"white"}}>
        <div className='mapimagediv'/>
        <div className='absolutemap'><h1>KONTAKT</h1>
         <p><BiMap/>:ZMAJ JOVE JOVANOVICA 24G, PANCEVO</p>
         <p><MdLocalPhone/>:+3816X XXX XXXX</p>
         <p><MdOutlineEmail/>:XXXXXXXXXXXXXX@GMAIL.COM</p>
         </div>
         
        
        <iframe className='iframe'
         title="pancevo"
         frameBorder={0}
          src="https://www.google.com/maps/embed/v1/place?q=Farmers+Market,+Zmaj+Jove+Jovanovića,+Pancevo,+Serbia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
          </iframe>
        
          
        </div>
        </div>
       
        
    );
}

export default Mainpage;