import React, { Component } from 'react';

import style from './index.module.css'

class VehicleForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      value: {name: 'eVan', speed: 40},
      number: 1,
      capacity: 100,
      hobbies: [
      ]
    };

    this.handleNumber = this.handleNumber.bind(this);
    this.handleCapacity = this.handleCapacity.bind(this);
    this.handleValueOfDropDown = this.handleValueOfDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleValueOfDropDown(event){
    switch (event.target.value) {
      case 'eVan':
        this.setState({value: {name: 'eVan', speed: 40}});
        break;
      case 'trike':
        this.setState({value: {name: 'trike', speed: 20}});
        break;
      case 'bike':
        this.setState({value: {name: 'bike', speed: 25}});
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
    let currentHobbies = this.state.hobbies;
    currentHobbies.push(this.state.value.name);
      this.setState({
        hobbies: currentHobbies
      });
    this.props.sendData(this.state);
    event.preventDefault();
  }

  render() {
    let hobbyItems = this.state.hobbies.map((hobby, i) => {
      return <li>{hobby}</li>;});

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Submit" />
        </form>
        {hobbyItems}
      </div>
    );
  }
}

export default VehicleForm;