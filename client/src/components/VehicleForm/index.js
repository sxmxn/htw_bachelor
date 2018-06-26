import React, { Component } from 'react';

import style from './index.module.css'

class VehicleForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      type_id: '',
      name: 'eVan',
      profile: 'car',
      speed_factor: 1,
      number: 1,
      capacity: [100],
      vehicle_types: [],
      vehicles: []
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
        this.setState({name: 'eVan', profile: 'car', speed_factor: 1});
        break;
      case 'trike':
        this.setState({name: 'Trike', profile: 'car', speed_factor: 0.7});
        break;
      case 'bike':
        this.setState({name: 'Bike', profile: 'bike', speed_factor: 1});
        break;
    }

  }

  handleNumber(event){
    const number = parseInt(event.target.value, 10);
    this.setState({number: number})
  }

  handleCapacity(event){
    const capacity = parseInt(event.target.value, 10);
    this.setState({capacity: [capacity]})
  }

  handleSubmit(event){
    //console.log(this.state)
    let currentVehicleTypes = this.state.vehicle_types;
    let currentVehicles = this.state.vehicles;
    currentVehicleTypes.push(
      {
        type_id:`vehicle_type_${this.state.vehicle_types.length +1}`  ,
        profile: this.state.profile,
        capacity: this.state.capacity,
        speed_factor: this.state.speed_factor,
        options: {
          number: this.state.number,
          name: this.state.name
        }
      });

    for(let i = this.state.number; i>0; i-- ){
      currentVehicles.push(
        {
          vehicle_id: `vehicle_${this.state.vehicles.length +1}`,
          start_address: {
            location_id: "zuerich",
            lon: 8.5033335 ,
            lat: 47.3871498
          },
          type_id: `vehicle_type_${this.state.vehicle_types.length}`,
          latest_end: 150000
        })
    }
      this.setState({
        vehicle_types: currentVehicleTypes,
        vehicles: currentVehicles
      });
    this.props.sendVehicleTypes(this.state.vehicle_types);
    this.props.sendVehicles(this.state.vehicles);
    event.preventDefault();
  }

  handleDeletion(event){
    let currentVehicleTypes = this.state.vehicle_types;
    let currentVehicles = this.state.vehicles;
    currentVehicleTypes.pop();

    for(let i = this.state.number; i>0; i-- ){
      currentVehicles.pop();
    }

    this.setState({
      vehicle_types: currentVehicleTypes,
      vehicles: currentVehicles
    });
    this.props.sendVehicleTypes(this.state.vehicle_types);
    this.props.sendVehicles(this.state.vehicles);
    event.preventDefault();
  }

  render() {
    let vehicleList = this.state.vehicle_types.map((vehicle, i) => {
      return <div key={i}>{`${vehicle.options.number} ${vehicle.options.name}, ${vehicle.capacity}`}</div>;});

    return (
      <div className={style.root}>
        <div className="container u-full-width u-max-full-width">
          <div className="row">
            <h4>Fahrzeugkonfiguration</h4>
          </div>
            <div className="row">
              <div className="six columns">
                <div className={style.form}>
                  <label className={style.label}>
                    Fahrzeugtyp:
                    <select className="u-full-width"  onChange={this.handleValueOfDropDown}>
                      <option value='eVan'>eVan</option>
                      <option value='trike'>Trike</option>
                      <option value='bike'>Bike</option>
                    </select>
                  </label>
                  <label className={style.label}>
                    Kapazität der Fahrzeuge in kg:
                    <input type="number" pattern="[0-9]*" className="u-full-width" value={this.state.capacity} onChange={this.handleCapacity}/>
                  </label>
                  <label className={style.label}>
                    Anzahl der Fahrzeuge:
                    <input type="number" pattern="[0-9]*" className="u-full-width" value={this.state.number} onChange={this.handleNumber}/>
                  </label>
                    <button className={style.submit} onClick={this.handleSubmit}>Add Vehicle</button>
                    <button className={style.delete} onClick={this.handleDeletion}>Delete Vehicle</button>
                </div>
              </div>
              <div className="six columns">
                <div className={style.list}>
                  <h6 className={style.headLineList}>Fahrzeuge:</h6>
                  {vehicleList}
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default VehicleForm;