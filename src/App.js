import Galery from './components/galerypage/Galery';
import Header from './components/header/header';
import styles from "./App.css"
import Restoran from './components/restoran/Restoran';
import { clickactions } from './components/store/reduxstore';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mainpage from './components/mainpage/Mainpage';
import {Route,Switch} from 'react-router-dom'
import Footer from './components/footer/Footer';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import Meni from './components/menipage/Meni';
import Logo from "./components/header/Logo-Restoran-Studnja.png"
import Kontakt from './components/Kontakt/Kontakt';
function App() {
  const showimage=useSelector((state)=>state.galerystore.showimage)

  const dispatch=useDispatch()
const selectclick=useSelector((state)=>state.headerstore.click)
  useEffect(() => {
    const timer = setTimeout(() => {
     dispatch(clickactions.removeclick())
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  
const app=!selectclick?( <div className='app'><Header/>
<Switch>
<Route path="/" exact>
<Redirect to="/Pocetna"/>
</Route>
<Route path="/Pocetna"> <Mainpage/></Route>
<Route path="/Galerija" exact> <Galery/></Route>
<Route path="/Meni"><Meni/></Route>
<Route path="/Kontakt"><Kontakt/></Route>
<Route path="/Restoran"><Restoran/></Route>
</Switch>
<Footer/></div>):(
   <div className='app-spin'>
   <h1 className='spin-h1'>DOBRODOSLI!!!</h1>
   <div className='hr'/>
   <img src={Logo} className='spin-img' alt="logo"></img></div>
)

  return (<div>

   {app}
  </div>
    

  );
}

export default App;
