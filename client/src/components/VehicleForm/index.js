import React, { Component } from 'react';

import style from './index.module.css'

let vehicleData = [];

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
    this.handleDeletion = this.handleDeletion.bind(this);

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
    const number = parseInt(event.target.value, 10);
    this.setState({number: number})
  }

  handleCapacity(event){
    const capacity = parseInt(event.target.value, 10);
    this.setState({capacity: capacity})
  }

  handleSubmit(event){
    //console.log(this.state)
    let currentVehicles = this.state.vehicles;
    currentVehicles.push(this.state.number + " " + this.state.value.name+ "(s)" + " (" + this.state.capacity + "kg)");
      this.setState({
        vehicles: currentVehicles
      });
      vehicleData.push({number: this.state.number, name: this.state.value.name, capacity: this.state.capacity});
    this.props.sendData(vehicleData);
    event.preventDefault();
  }

  handleDeletion(event){
    let currentVehicles = this.state.vehicles;
    currentVehicles.pop();
    this.setState({
      vehicles: currentVehicles
    });
    vehicleData.pop();
    this.props.sendData(vehicleData);
    event.preventDefault();
  }

  render() {
    let vehicleList = this.state.vehicles.map((vehicle, i) => {
      return <li key={i}>{vehicle}</li>;});

    return (
      <div>
        <div className="container">
            <div className="row">
              <div className="six columns">
                <div className={style.form}>
                  <label>
                    Fahrzeugtyp:
                    <select className="u-full-width"  onChange={this.handleValueOfDropDown}>
                      <option value='eVan'>eVan</option>
                      <option value='trike'>Trike</option>
                      <option value='bike'>Bike</option>
                    </select>
                  </label>
                  <label>
                    Kapazität der Fahrzeuge in kg:
                    <input type="number" pattern="[0-9]*" className="u-full-width" value={this.state.capacity} onChange={this.handleCapacity}/>
                  </label>
                  <label>
                    Anzahl der Fahrzeuge:
                    <input type="number" pattern="[0-9]*" className="u-full-width" value={this.state.number} onChange={this.handleNumber}/>
                  </label>
                </div>
              </div>
              <div className="six columns">
                <div className={style.list}>
                  {vehicleList}
                </div>
              </div>
            </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={`six columns`}>
                <button className={style.submit} onClick={this.handleSubmit}>Add Vehicle</button>
            </div>
            <div className="six columns">
                <button className={style.delete} onClick={this.handleDeletion}>Delete Vehicle</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VehicleForm;