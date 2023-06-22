import React,{useRef} from 'react';
import styles from "./Kontakt.css"
import {styled} from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material';
const theme = createTheme({
  breakpoints: {
 
    values: {
      xs: 0,
      sm: 300,
      md: 500,
      lg: 900,
      xl: 1200
    }
  }
});
const ValidationTextField = styled(TextField)({

   width:"49%",
    marginBottom:"10px",
    '& label':{color:"black"},
    '& label.Mui-focused':{color:"grey"},

    '& input:invalid + fieldset': {
      borderColor: 'rgb(141, 79, 3)',
      borderWidth: 2,
    },
  
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 4,
      borderColor:"grey",
      padding: '4px !important', // override inline-style
    },
  });
  const Areatext = styled(TextField)({
    width:"70%",
    [theme.breakpoints.down("lg")]:{
     
    
    },
    marginBottom:"10px",
    '& label':{color:"black"},
    '& label.Mui-focused':{color:"grey"},
    '& input': {
        height:"100px"
       },
    '& input:invalid + fieldset': {
      borderColor: 'rgb(141, 79, 3)',
      borderWidth: 2,
    },
  
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 4,
      borderColor:"grey",
      padding: '4px !important', // override inline-style
    },
  });


function Kontakt(props) {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    emailjs.sendForm("service_zpqksyo","template_un21jal", form.current, 'DMF8J-AVRLhD4fXQy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); 
    };
    
    return (
        <div className='maincontact'>
        <div className='kontakt'></div>
        <div className='formandreservation'>
        <div className='divv'>
        <h1>
        POSALJITE PORUKU

        </h1>
        <form
        className="form"
         ref={form} onSubmit={sendEmail}>
      <div className='formnameandemail'>
      <ValidationTextField
        label="Ime"
        name="name"
        required
        variant="outlined"
        color="warning"
        />
        <ValidationTextField
        label="E-mail"
        name="e-mail"
        color="warning"
        required
      
        />
      </div>
     
      
      <Areatext 
      sx={{width:{ lg: "70%", xs:"90%" }}}
      name="message"
      color="warning"
      required
        variant="outlined"
        label="Poruka"/>
        <button className='btn' type='submit'>POSALJI</button>
        </form>
        </div>
         <div className='divv2'>
            <h1>Moguce je rezervisati samo preko telefona</h1>
            <a className='atel' href="tel:+381607420567">+381607420567</a>
            <p>E-mail: restoran@gmail.com</p>
            <p></p>
         </div>
        </div>
       
             <iframe 
             className='iframe2'
         title="pancevo"
         frameBorder={0}
          src="https://www.google.com/maps/embed/v1/place?q=Farmers+Market,+Zmaj+Jove+Jovanovića,+Pancevo,+Serbia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
          </iframe> 
        </div>
    );
}

export default Kontakt;