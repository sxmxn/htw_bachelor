import React, { Component } from 'react';
import './App.css';
import './skeleton.css';
import './normalize.css';

// components
import VehicleForm from './components/VehicleForm'


import data from './data.json';
import OptimizationGoalForm from "./components/OptimizationGoalForm";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
    };
  }


  getVehicles(vehicle){
    console.log(vehicle)
  }

  getOptimizationGoal(goal){
    console.log(goal)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <VehicleForm sendData={this.getVehicles}/>
        <OptimizationGoalForm sendData={this.getOptimizationGoal}/>
        <button onClick={() => {console.log(data)}}>Click ME</button>
      </div>
    );
  }
}

export default App;
