 import{TfiMenu,TfiClose} from "react-icons/tfi"
 import styles from './header.css'
 const MenuToggle = (props) => {
   return(
    <div className="togglebutton">
{!props.isactive&&<button className="toggle" onClick={props.toggle}>
<TfiMenu fontSize="xx-large"/>
</button>}
{props.isactive&&<button  className="toggle"  onClick={props.toggle}>
<TfiClose fontSize="xx-large"/>
</button>}
    </div>

   )
   };
  export default MenuToggle