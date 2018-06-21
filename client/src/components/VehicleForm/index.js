import React, { Component } from 'react';
import DropDown from '../../components/DropDown'

class VehicleForm extends Component {

  state =  { vehicle: '' }

  handleLanguage = (langValue) => {
    this.setState({vehicle: langValue});
  }

  render() {
    return (
      <div>
        <DropDown sendData={this.handleLanguage}/>
        Average speed (km/h) of this vehicle: {this.state.vehicle}
      </div>
    );
  }
}

export default VehicleForm;