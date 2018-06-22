import React, { Component } from 'react';
import './App.css';
import './skeleton.css';
import './normalize.css';

// components
import VehicleForm from './components/VehicleForm'


import data from './data.json';
import OptimizationGoalForm from "./components/OptimizationGoalForm";


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <VehicleForm/>
        <OptimizationGoalForm/>
        <button onClick={() => {console.log(data)}}>Click ME</button>
      </div>
    );
  }
}

export default App;
