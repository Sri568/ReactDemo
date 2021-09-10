import React from "react";
import Discount from '../img/discount.png';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import About from './record';

const LoanAcceptance = (props) =>{
   
    return (
        <div class="loanacpt-div">
            <div style={{float:"left",padding: '15px',height:'80px'}}>
                <img src={Discount} style={{backgroundColor:'#fff'}}></img>
            </div>
            <div>
           
            <p style={{paddingTop : '10px',paddingBottom : '5px'}}><b>Mrs Lakshmi Kantha </b> your pre-qualifiedloan is ready of Rs.1,00,000 at an intrest rate of <b>10%</b> for 5
               <b> years.</b></p>
               </div>
               
               <hr style={{marginLeft:'15px',marginRight:'15px',border: '1px solid black' }}/>
               
               <div style={{display: 'flex',align:'center',width:'100%'}}>
               
               <Button variant="outline-danger" style={{marginLeft:'auto', width:'150px',marginBottom:'15px'}}
               onClick={props.thankyouClick}>No</Button>
               <Button variant="danger" style={{marginRight:'auto',marginLeft:'10px',width:'150px',marginBottom:'15px'}}
             onClick={props.routeChange}>Yes</Button>
               </div>
        </div>
    );
}
export default LoanAcceptance;