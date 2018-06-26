import React, { Component } from 'react';
import './App.css';
import './skeleton.css';
import './normalize.css';


// components
import VehicleForm from './components/VehicleForm'
import data from './data.json';
import OptimizationGoalForm from "./components/OptimizationGoalForm";
import Map from './components/Map'
import CreateStopps from './components/CreateStopps';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      vehicles: {},
      objectives: [],
      stopps: {}
    };
    this.getVehicles = this.getVehicles.bind(this);
    this.getOptimizationGoal = this.getOptimizationGoal.bind(this);
    this.getStopps = this.getStopps.bind(this);
  }


  getVehicles(vehicle){
    this.setState({vehicles: vehicle}, () => {
    console.log(this.state.vehicles)})
  }

  getOptimizationGoal(goal){
    this.setState({objectives: [goal]}, () => {
    console.log(this.state)})
  }


  getStopps(stopps){
    this.setState({stopps: stopps}, () => {
      console.log(this.state.stopps)
    })
  }

  createSettings(){
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <div className="card">
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
          <div className="container">
            <div className="row">
              <CreateStopps sendData={this.getStopps}/>
            </div>
          </div>
          <div className="container">
            <div className="row">
                <button className="calculate" onClick={this.createSettings}>Berechnung starten</button>
                <button className="calculate" onClick={() => {console.log(data)}}>Click ME</button>
            </div>
          </div>
        </div>
        <Map/>
      </div>
    );
  }
}

export default App;
