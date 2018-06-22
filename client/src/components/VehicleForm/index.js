import React, { Component } from 'react';
import DropDown from '../../components/DropDown'

import style from './index.module.css'

class VehicleForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      vehicle: '' ,
      number: 1,
      capacity: 100
    };

    this.handleVehicleTyp = this.handleVehicleTyp.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleCapacity = this.handleCapacity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleVehicleTyp = (Value) => {
    this.setState({vehicle: Value});
  };

  handleNumber(event){
    const number = parseInt(event.target.value, 10)
    this.setState({number: number})
  }

  handleCapacity(event){
    const capacity = parseInt(event.target.value, 10)
    this.setState({capacity: capacity})
  }

  handleSubmit(event){
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="one-third column">
             <DropDown sendData={this.handleVehicleTyp}/>
            </div>
            <div className="one-third column">
              <label>
                Kapazität der Fahrzeuge in kg:
                <input type="number" pattern="[0-9]*" value={this.state.capacity} onChange={this.handleCapacity}/>
              </label>
            </div>
            <div className="one-third column">
              <label>
                Anzahl der Fahrzeuge:
                <input type="number" pattern="[0-9]*" value={this.state.number} onChange={this.handleNumber}/>
              </label>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default VehicleForm;