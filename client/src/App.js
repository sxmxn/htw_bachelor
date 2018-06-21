import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import HelloH1 from './components/HelloH1'
import DropDown from './components/DropDown'

import data from './data.json';

class App extends Component {

  vehicles = [
    {
      trike: {speed: 20},
      bike: {speed: 25},
      evan: {speed: 40}
    }
  ]

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <HelloH1/>
        <DropDown
        data={this.vehicles}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={() => {console.log(data)}}>Click ME</button>
      </div>
    );
  }
}

export default App;
