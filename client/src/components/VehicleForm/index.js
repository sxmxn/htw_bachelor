import React, { Component } from 'react';
import DropDown from '../../components/DropDown'

class VehicleForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      vehicle: '' ,
      number: 1
    };

    this.handleVehicleTyp = this.handleVehicleTyp.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleVehicleTyp = (Value) => {
    this.setState({vehicle: Value});
  };

  handleNumber(event){
    const number = parseInt(event.target.value, 10)
    this.setState({number: number})
  }


  handleSubmit(event){
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <DropDown sendData={this.handleVehicleTyp}/>
        <label>
          Anzahl der Fahrzeuge:
          <input type="number" pattern="[0-9]*" value={this.state.number} onChange={this.handleNumber}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default VehicleForm;