import React from 'react';
import styled from "./Restoran.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import Sac from "./sac.jpg"
import Wedding from "./wedding.jpeg"
import Logo from "../header/Logo-Restoran-Studnja.png"
function Restoran(props) {
    return (
        <div className='restoran'>
         <div class="restaurantimage">
            <img src={Logo} alt="logo"/>
         </div>   
         <div  className='aboutpage about3' 
        style={{background:"rgb(247, 231, 181)", marginTop:"0px"}}>
        
        <div className="aboutpage3">
         <h1>Nas restoran</h1>
            <p>O nasem restoranu ne treba mnogo pricati vec doci i posetiti ga.
            Ovde svakog dana s ljubavlju spremamo poslactice koje vam serviramo uz neverovatnu atmosferu.
            Vise razlicitih ambijentalnih uslova doprinece da se svako oseca prijatno.
            Bez obzira da li uzivate u etno ili modernom stilu,
             potrudicemo se da vas boravak ucinimo nezaboravnim.
             Radno vreme restorana je od ponedeljka do petka od 08:00 do
             22:00, a subotom i nedeljom od 08:00 do 24:00.</p>

         </div>
         <img src={Sac} className='cake' alt="sac"/>
        </div>
        <div  className='aboutpage about3' 
        style={{background:"black",color:"white", marginTop:"0px"}}>
                 <img src={Wedding} className='cake' alt="sac"/>

        <div className="aboutpage3">

         <h1>Proslave</h1>
            <p>Jela nase kuhinje daleko su poznta po svom ukusu i izgledu.
            Kod nas mozete organizovati slavlje, do 500 gostiju, kakvo ste zamislili i planirali. 
            Najavite se unapred i nasi organizatori ce vam pomocii da bajku pretvorite u realnost.</p>
         <div className='linkdiv' style={{borderColor:"grey"}}>
            <NavLink className="navlink3" to="/Meni">
                POGLEDAJTE NAS MENI
            </NavLink>
         </div>
         </div>
        </div>
        </div>
    );
}

export default Restoran;