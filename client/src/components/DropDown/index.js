import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export class DropDown extends React.Component {

  state = {
    selectedOption: '',
  };

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
            { label: 'eVan', value: 40 },
            { label: 'Trike', value: 20 },
            { label: 'Bike', value: 25}
          ]} onChange={this.handleChange} value={selectedOption} placeholder="Select an option" />
        </label>
      </div>
    );
  }
}

export default DropDown