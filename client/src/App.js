import React, { Component } from 'react';
import axios from 'axios';
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
      vehicle_types: {},
      objectives: [],
      stopps: {},
      geoJSON: null,
    };
    this.getVehicleTypes = this.getVehicleTypes.bind(this);
    this.getOptimizationGoal = this.getOptimizationGoal.bind(this);
    this.getStopps = this.getStopps.bind(this);
    this.createSettings = this.createSettings.bind(this);
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      geoJSON: null
    })
  }


  getVehicleTypes(vehicleTypes){
    this.setState({vehicle_types: vehicleTypes}, () => {
    console.log(this.state.vehicle_types)})
  }

  getOptimizationGoal(goal){
    this.setState({objectives: [goal]}, () => {
    console.log(this.state.objectives)})
  }


  getStopps(stopps){
    this.setState({stopps: stopps}, () => {
      console.log(this.state.objectives)
    })
  }

  createSettings() {
    this.getState((curState) => {
      console.log(curState)
    })
    axios.post('http://localhost:3001/api/v1/calculateroute',
      {
        vehicleObject: this.state.vehicle_types,
        stopps: this.state.stopps,
        calculateObjective: this.state.objectives
      }).then((response) => {
      this.setState({geoJSON: response.data.geojson}, () => {
        console.log(this.state)
      })
      //console.log('res from backend', response);

    });
  }

  getState(callback) {
    this.setState((prevState) => {
      callback(prevState);
    });
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
              <div className="twelve column">
                <VehicleForm sendVehicleTypes={this.getVehicleTypes}/>
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
              <OptimizationGoalForm sendData={this.getOptimizationGoal}/>
            </div>
          </div>
          <div className="container">
            <div className="row">
                <button className="calculate" onClick={this.createSettings || this.handler}>Berechnung starten</button>
                <button className="calculate" onClick={this.handler}>Berechnung zurücksetzen</button>
            </div>
          </div>
        </div>
        { this.state.geoJSON !== null &&
          <Map value={this.state.geoJSON}/>
        }
        { this.state.geoJSON === null &&
          <p>...</p>
        }
      </div>
    );
  }
}

export default App;
