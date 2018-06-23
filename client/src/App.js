import React, { Component } from 'react';
import './App.css';
import './skeleton.css';
import './normalize.css';

// components
import VehicleForm from './components/VehicleForm'


import data from './data.json';
import OptimizationGoalForm from "./components/OptimizationGoalForm";

//variables
let vehicles;
let optimizationGoal;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
    };
  }


  getVehicles(vehicle){
    vehicles = vehicle;
    console.log(vehicles)
  }

  getOptimizationGoal(goal){
    optimizationGoal = goal;
    console.log(optimizationGoal)
  }

  createSettings(){
    let setting = {
      vehicles, optimizationGoal
    }
    console.log(setting);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="two-thirds column">
              <VehicleForm sendData={this.getVehicles}/>
            </div>
            <div className="one-third column">
              <OptimizationGoalForm sendData={this.getOptimizationGoal}/>
            </div>
          </div>
        </div>
        <button class="button-primary" onClick={this.createSettings}>Berechnung starten</button>
        <button onClick={() => {console.log(data)}}>Click ME</button>
      </div>
    );
  }
}

export default App;
