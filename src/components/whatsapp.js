import React from "react";
import WhatsApp from '../img/whatsapp.png';
import '../App.css';

const WhatsAppDetail=(props)=>{
    return(
        <div>
        <div style={{display: 'flex',float:"left", lineHeight: '40px', marginRight:'5px',marginTop:'5px',marginBottom:'5px'}}>
        <img src={WhatsApp} height="15"  />
        
        </div>
        <div class="whatsapptxtdiv">
        <p class="whatsapptxt">Below are the WhatsApp benifits for you</p>
        </div>
       
        </div>
    );
}
export default WhatsAppDetail;