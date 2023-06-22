import { NavLink } from "react-router-dom/cjs/react-router-dom"
import MenuToggle from "./MenuToggle"
import { useState } from "react"
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {clickactions} from "../store/reduxstore"
import { galeryaction } from "../store/reduxstore";
import styles from './header.css'
const Menu=()=>{
  const dispatch=useDispatch()
  const [width, setWidth] = useState(0)
  const[isopen,setisopen]=useState(false)
  const[isactive,setisactive]=useState(false)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
      dispatch(clickactions.addwidth(window.innerWidth))
      if(window.innerWidth<500){
       setisactive(false)
      }
      
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
   
    return () => { 
      window.removeEventListener("resize", handleResize)
     
    }
  }, [setWidth])
  
   
  
   
    const links=["Pocetna","Meni","Restoran","Galerija","Kontakt"]
    const navlinks=links.map((item, i)=>(
     
        <NavLink key={i} to={`/${item}`}
       onClick={()=>{dispatch(clickactions.addclicke());
       dispatch(galeryaction.closeimage())
        const timer = setTimeout(() => {
     dispatch(clickactions.removeclick())
    }, 2000);
    return () => clearTimeout(timer)}}
         activeClassName="active" className="navlink" 
        style={isopen&&width<=500?{
          animationName:`spin`,
         animationDuration:`${(i+1)*0.3}s`,
         animationTimingFunction:"linear",
         animationFillMode:"forwards"}:!isopen&&width<=500?{
            animationName:`unspin`,
         animationDuration:`${(i+1)*0.3}s`,
         animationFillMode:"forwards"
          }:{}}
        >
         {item}
        </NavLink>
    ))
   
    return(
        <div className="navbar" >
<MenuToggle
isactive={isopen}
 toggle={()=>{setisopen(!isopen);setisactive(true)}}/>
<div className="navitems" 
style={isactive||width>500?{display:"flex"}:{display:"none"}}>{navlinks}</div>
        </div>
    )
}
export default Menu