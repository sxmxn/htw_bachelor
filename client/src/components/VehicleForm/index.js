import React, { Component } from 'react';

import style from './index.module.css'

class VehicleForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      value: {name: 'eVan', speed: 40},
      number: 1,
      capacity: 100,
      vehicles: [
      ]
    };

    this.handleNumber = this.handleNumber.bind(this);
    this.handleCapacity = this.handleCapacity.bind(this);
    this.handleValueOfDropDown = this.handleValueOfDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteLastVehicle = this.deleteLastVehicle.bind(this);

  }

  handleValueOfDropDown(event){
    switch (event.target.value) {
      case 'eVan':
        this.setState({value: {name: 'eVan', speed: 40}});
        break;
      case 'trike':
        this.setState({value: {name: 'Trike', speed: 20}});
        break;
      case 'bike':
        this.setState({value: {name: 'Bike', speed: 25}});
        break;
    }

  }

  handleNumber(event){
    const number = parseInt(event.target.value, 10)
    this.setState({number: number})
  }

  handleCapacity(event){
    const capacity = parseInt(event.target.value, 10)
    this.setState({capacity: capacity})
  }

  handleSubmit(event){
    //console.log(this.state)
    let currentVehicles = this.state.vehicles;
    currentVehicles.push(this.state.number + " " + this.state.value.name+ "(s)" + " (" + this.state.capacity + "kg)");
      this.setState({
        vehicles: currentVehicles
      });
    this.props.sendData(this.state);
    event.preventDefault();
  }

  deleteLastVehicle(event){
    let currentVehicles = this.state.vehicles;
    currentVehicles.pop();
    this.setState({
      vehicles: currentVehicles
    });
    event.preventDefault();
  }

  render() {
    let vehicleList = this.state.vehicles.map((vehicle, i) => {
      return <li key={i}>{vehicle}</li>;});

    return (
      <div className="container">
          <div className="row">
            <div className="one-third column">
              <label>
                Fahrzeugtyp:
                <select className="u-full-width"  onChange={this.handleValueOfDropDown}>
                  <option value='eVan'>eVan</option>
                  <option value='trike'>Trike</option>
                  <option value='bike'>Bike</option>
                </select>
              </label>
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
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.deleteLastVehicle}>Delete Vehicle</button>

        {vehicleList}
      </div>
    );
  }
}

export default VehicleForm;