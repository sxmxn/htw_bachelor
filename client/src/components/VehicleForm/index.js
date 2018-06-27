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
      street: "Weberstr.",
      street_number: "21",
      place: "Zürich",
      vehicle_types: []
    };

    this.handleNumber = this.handleNumber.bind(this);
    this.handleCapacity = this.handleCapacity.bind(this);
    this.handleValueOfDropDown = this.handleValueOfDropDown.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
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

  handleChanges(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    //console.log(this.state)
    let currentVehicleTypes = this.state.vehicle_types;
    currentVehicleTypes.push(
      {
        type_id:`vehicle_type_${this.state.vehicle_types.length +1}`  ,
        profile: this.state.profile,
        capacity: this.state.capacity,
        speed_factor: this.state.speed_factor,
        options: {
          number: this.state.number,
          name: this.state.name,
          depot: {
              street: this.state.street,
              street_number: this.state.street_number,
              place: this.state.place

          }
        }
      });

      this.setState({
        vehicle_types: currentVehicleTypes
      });
    this.props.sendVehicleTypes(this.state.vehicle_types);
    event.preventDefault();
  }

  handleDeletion(event){
    let currentVehicleTypes = this.state.vehicle_types;
    currentVehicleTypes.pop();

    this.setState({
      vehicle_types: currentVehicleTypes,
    });
    this.props.sendVehicleTypes(this.state.vehicle_types);
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
              <div className="one-third column">
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
                    <input type="number" pattern="[0-9]*" className="u-full-width" placeholder={"Kapazität"} onChange={this.handleCapacity}/>
                  </label>
                  <label className={style.label}>
                    Anzahl der Fahrzeuge:
                    <input type="number" pattern="[0-9]*" className="u-full-width" placeholder={"Anzahl"} onChange={this.handleNumber}/>
                  </label>
                    <button className={style.submit} onClick={this.handleSubmit}>Add Vehicle</button>
                    <button className={style.delete} onClick={this.handleDeletion}>Delete Vehicle</button>
                </div>
              </div>
              <div className="one-third column">
                <div className={style.depot}>
                 <h5>Depot</h5>
                </div>
                  <div className={style.form}>
                    <label className={style.label}>
                      Straße des Depots:
                      <input type="text"  name="street" className={style.streetname} placeholder={"Straße"} onChange={this.handleChanges}/>
                      <input type="text"  name="street_number" className={style.number} placeholder={"Nr."} onChange={this.handleChanges}/>
                    </label>
                    <label className={style.label}>
                      Ort des Depots:
                      <input type="text"  name="place" className={style.place} placeholder={"Ort"} onChange={this.handleChanges}/>
                    </label>
                </div>
              </div>
              <div className="one-third column">
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