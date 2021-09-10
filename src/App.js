import Banner from './img/group.png';
 import './App.css';
 import React,{Component} from 'react';
 import Profile from './components/profile';
 import WhatsAppDetail from './components/whatsapp';
 import WhatsAppBenifits from './components/whatsappbenifts';
 import Congrats from './components/congratulation';
 import LoanBnfHd from './components/loanofrbenfhd';
 import LoanAcceptance from './components/loanacceptance';
 import {BrowserRouter as Router,Route,Link,Switch,useHistory} from 'react-router-dom';
 import Record from './components/record';
 import ThankYou from './components/thankyou';

 function Content() {
  let history = useHistory();

  function handleClick() {
    history.push("/record");
  }
  function thankyouClick() {
    history.push("/thankyou");
  }

  return (
    <div class="App">
      
    {/* <img src= {Banner} alt="Aditya group banner" align={"left"}/><br/> */}

 
    <p class="img-bg" >Aditya Birla Group</p> 
    <div class="body">
    <Profile title="Lakshmi Kantha"></Profile>
    <WhatsAppDetail/>
    <WhatsAppBenifits/>
    <Congrats/>
    <LoanBnfHd/>
    <LoanAcceptance routeChange={handleClick} thankyouClick={thankyouClick}/>
    </div>
 
</div>
  );
}
class App extends Component{

render(){  return (
  <Router>
  <Route path="/record" exact component={Record} />
  <Route path="/thankyou" exact component={ThankYou} />
  <Route path="/" exact component={Content} />
</Router>
  );
  }
}

export default App;
