import React, { Component } from 'react';

class FlavorForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: this.props.data[0].evan};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state)
  }

  handleSubmit(event) {
    alert('Your selected vehicle is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your vehicle:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={this.props.data[0].evan}>eVan</option>
            <option value={this.props.data[0].trike} >Trike</option>
            <option value={this.props.data[0].bike}>Bike</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm