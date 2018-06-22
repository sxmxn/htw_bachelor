import React, { Component } from 'react';
import './App.css';
import './skeleton.css';
import './normalize.css';

// components
import VehicleForm from './components/VehicleForm'


import data from './data.json';
import OptimizationGoalForm from "./components/OptimizationGoalForm";

let vehicles = [];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
    };
  }

  renderVehicleList(){
    return(
      <div>
        {vehicles.map(card => card)}
      </div>
    )
  }


  getVehicles(vehicle){
    vehicles.push(vehicle)
    console.log(vehicles)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <VehicleForm sendData={this.getVehicles}/>
        <OptimizationGoalForm/>
        <ul>
          <li>Item 1</li>
        </ul>
        {this.renderVehicleList()}
        <button onClick={() => {console.log(data)}}>Click ME</button>
      </div>
    );
  }
}

export default App;
