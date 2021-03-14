import React from "react";
import "./style.css";

class App extends React.Component{
  constructor(props){
    super();
    this.state= {
      name:'',
      surname:'',
      address:'',
      plz:''
    };
    this.addressExpression =  this.addressExpression.bind(this);
  }
addressExpression(){
  return(this.state.address + " , " + this.state.plz);
}  

  render(){
  return (
    <div>
      <h1> Hello <span> {this.state.name} {this.state.surname} </span></h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="NameSurname">
      <input type="text" id="nameCell" placeholder="Name" onChange={(event)=> this.setState({name: event.target.value}) }/>
      <input type="text" id="surnameCell" placeholder="Surname" onChange={(event)=> this.setState({surname: event.target.value}) }/>
      </div>
      <div className="addressPLZ">
       <input type="text" id="addressCell" placeholder="Address" onChange={(event)=> this.setState({address: event.target.value}) }/>
       <input type="number" id="plzCell" placeholder="PLZ" onChange={(event)=> this.setState({plz: event.target.value}) }/>
       </div>
       {this.state.address && <p> Your Address is {this.addressExpression()} </p>}
    </div> 
  );
}
}

export default App;
