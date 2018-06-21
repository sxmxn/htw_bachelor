import React, { Component } from 'react';
import './App.css';

// components
import VehicleForm from './components/VehicleForm'


import data from './data.json';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <VehicleForm/>
        <button onClick={() => {console.log(data)}}>Click ME</button>
      </div>
    );
  }
}

export default App;
