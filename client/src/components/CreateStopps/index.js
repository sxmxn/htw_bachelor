import React, { Component } from 'react';

import style from './index.module.css'

class CreateStopps extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      pickup_street: "Weberstr.",
      pickup_number: "21",
      pickup_place: "Zürich",
      delivery_street: "Neue Allmendstr",
      delivery_number: "10",
      delivery_place: "Erlenbach"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    console.log(this.state)
    //this.props.sendData(this.state);

  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container u-full-width u-max-full-width">
        <input type="text"  name="pickup_street" className={style.streetname} placeholder={"Straße Abholung"} onChange={this.handleChange}/>
        <input type="text"  name="pickup_number" className={style.number} placeholder={"Nr."} onChange={this.handleChange}/>
        <input type="text"  name="pickup_place" className={style.place} placeholder={"Ort Abholung"} onChange={this.handleChange}/>
        <input type="text"  name="delivery_street" className={style.streetname} placeholder={"Straße Lieferung"} onChange={this.handleChange}/>
        <input type="text"  name="delivery_number" className={style.number} placeholder={"Nr."} onChange={this.handleChange}/>
        <input type="text"  name="delivery_place" className={style.place} placeholder={"Ort Lieferung"} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add Stopp</button>
      </div>
    );


  }
}

export default CreateStopps;
