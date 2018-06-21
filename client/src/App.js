import React, { Component } from 'react';
import './App.css';

// components
import HelloH1 from './components/HelloH1'
import DropDown from './components/DropDown'

import data from './data.json';


class App extends React.Component {

  state =  { vehicle: '' }

  handleLanguage = (langValue) => {
    this.setState({vehicle: langValue});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Miami</h1>
        </header>
        <HelloH1/>
        <DropDown sendData={this.handleLanguage}/>
        Average speed (km/h) of this vehicle: {this.state.vehicle}
        <button onClick={() => {console.log(data)}}>Click ME</button>
      </div>
    );
  }
}

export default App;
