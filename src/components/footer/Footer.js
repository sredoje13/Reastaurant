import React, { useEffect } from 'react';
import styled from "./Footer.css"
import { useRef } from 'react';
import Logo from "../header/Logo-Restoran-Studnja.png"
import "aos/dist/aos.css";
import {AiOutlineInstagram,AiFillFacebook } from "react-icons/ai"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import Aos from 'aos';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {useSelector } from 'react-redux'

function Footer(props) {
    const showimage=useSelector((state)=>state.galerystore.showimage)
    const setwidth=useSelector((state)=>state.headerstore.width)
    useEffect(()=>{
Aos.init();
Aos.refresh()
    },[])
    const array=["Pocetna", "Meni", "Restoran","Galerija", "Kontakt"]
    const links=array.map((item)=>(
        <NavLink className="navlinkclass" activeClassName="navlinkactive" to={item} key={item}>{item}</NavLink>
    ))

    const ref=useRef()
    let height=0;
    if(ref.current!==undefined){
        height=ref.current.clientHeight
    }
    else{
        height=0
    }

    return (
        <div className='footer' style={showimage?{background:"#000000d5"}:{}}>
          
<div ref={ref} 
className='logofooter' 
data-aos="zoom-out"
data-aos-offset={setwidth>500?500:300}
data-aos-duration="3000"
>
<img className="footer-img" src={Logo} alt="logo"/>

</div>

<div className='container'>
<div className='grid-item'>
<h2>Radno vreme:</h2>
<p>Pon-pet:08:00-22:00</p>
<p>Sub-ned:08:00-24:00</p>
</div>
<div className='grid-item'>
<h2>Pogledajte ostalo</h2>
 {links}
</div>

<div className='grid-item'>
    <h2>Pratite nas</h2>
<div className='afooterdiv'>
<a href='#' className='afooter'><AiFillFacebook/></a>
<a href="#" className='afooter'><AiOutlineInstagram/></a>

</div>
</div>
<div className='grid-item'>
<h2>Rezervisite svoje mesto na vreme</h2>  
<p>+3816x XXXX XXX</p>  
<p>PANCEVO</p>
 </div>
</div>
<p className='footer-p'><AiOutlineCopyrightCircle/>2023.
All rights reserved. Izrada sajta JP.</p>
</div>
  
      
    );
}

export default Footer;