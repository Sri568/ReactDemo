import React from "react";
import LeftC from '../img/leftc.png';
import RightC from '../img/rightc.png';
import Congratulations from '../img/congratulations.png';

const Congrats = () =>{
    return(
        <div  class="cng-div">
            <div><img src={LeftC} style={{padding : '10px 0', position: 'absolute',left:'45px'}} /></div>
            <div class="center"><img  src={Congratulations} /><p>Hi Lakshmi Kantha, We have an exciting offer for you!</p></div>
            <div><img src={RightC} style={{padding : '10px', position: 'absolute',right:'45px'}}/></div>
        </div>
    
    );
}
export default Congrats;