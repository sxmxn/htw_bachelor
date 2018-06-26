import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import style from './index.module.css'

export class DropDown extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.sendData(selectedOption.value);
    console.log(`Selected: ${selectedOption.value}`);
  };

  render() {

    const { selectedOption } = this.state;

    return (
      <div>
        <label>
          Pick your vehicle:
          <Dropdown
            options={[
            { label: 'eVan', value: { profile: 'eVan', speed_factor:40 }},
            { label: 'Trike', value: { profile: 'Trike', speed_factor:20 }},
            { label: 'Bike', value:{ profile: 'Bike', speed_factor:25 }}
          ]} onChange={this.handleChange} value={selectedOption} placeholder="Select an option" />
        </label>
      </div>
    );
  }
}

export default DropDown