import React from 'react';
import House from '../img/house.png';
import Security from '../img/security.png';

const WhatsAppBenifits =()=>{
    return(
        <div class="borderd-div">
             <div style={{display: 'flex',float:"left", lineHeight: '40px', marginRight:'5px',marginTop:'5px',marginBottom:'5px',padding: '10px'}}>
        <img src={House} height="15"  />
        
        </div>
                 <div style={{padding: '10px'}}>Available anytime,anywhere,24*7/365 days.</div>
                 <hr style={{padding :0}}/>
                 <div style={{display: 'flex',float:"left", lineHeight: '40px', marginRight:'5px',marginTop:'5px',marginBottom:'5px',padding: '10px'}}>
        <img src={Security} height="15"  />
        
        </div>
                 <div style={{padding: '10px'}}>Extremly secure with end-to-end encryption.</div>
        
        </div>
    );
}
export default WhatsAppBenifits;