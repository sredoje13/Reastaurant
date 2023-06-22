import Menu from "./Menu";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import Logo from "./Logo-Restoran-Studnja.png"
import styled from "./header.css"

import { useSelector } from "react-redux";
import { useEffect,useState,useRef } from "react";
const Header=()=>{
  const showwidth=useSelector((state)=>state.headerstore.width)
  const showimage=useSelector((state)=>state.galerystore.showimage)
  const location=useLocation()
    const ref=useRef()
    const[isfixed,setisfixed]=useState(true)
    
    let padding=true
   
    const [scrollPosition, setScrollPosition] = useState(0);
    function handleScroll (){
      setScrollPosition(window.pageYOffset);
      if(ref.current!==undefined){
        if(window.pageYOffset>ref.current.offsetHeight+200){
          setisfixed(false)
        }
        else(setisfixed(true))
      
      }
  };
if(scrollPosition===0){
    padding=true
}
else{
    padding=false
}
  useEffect(() => {
  
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
return(
<div id="headers"
 ref={ref} className={padding?"header padding":"header"}
 style={{position:isfixed?"fixed":"relative",
 opacity:showimage?"0.2":"1",
 background:location.pathname==="/"||location.pathname==="/Pocetna"||location.pathname==="/Kontakt"
      ||location.pathname==="/Restoran"||showwidth<=500?"inherit":"linear-gradient(#ffffff, #412905)"}
 } >
<div >
<img src={Logo} className="logo" alt="logo" style={padding?{
  animationName:"logo",
  animationDuration:"1s",
  animationFillMode:"forwards"}:{animationName:"none"}}/>
</div>
<Menu />
    </div>
)

}
export default Header;