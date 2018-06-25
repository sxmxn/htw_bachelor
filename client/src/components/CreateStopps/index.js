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
      delivery_place: "Erlenbach",
      stoppData: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleSubmit(){
    let currentAddress = this.state.stoppData;
    this.state.stoppData.push({pickup_street: this.state.pickup_street, pickup_number: this.state.pickup_number, pickup_place: this.state.pickup_place, delivery_street: this.state.delivery_street, delivery_number: this.state.delivery_number, delivery_place: this.state.delivery_place});
    this.setState({
      stoppData: currentAddress
    });

    console.log(this.state.stoppData)
    //this.props.sendData(stoppData);
  }

  handleDeletion(){
    let currentAddress = this.state.stoppData;
    currentAddress.pop()
    this.setState({
      stoppData: currentAddress
    });

    console.log(this.state.stoppData)
    //this.props.sendData(stoppData);
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
    let addressList = this.state.stoppData.map((address, i) => {
      return <div key={i}>
        <span className={style.address}><b>Abholadresse: </b>{`${address.pickup_street} ${address.pickup_number}, ${address.pickup_place}`}</span>
        <br/>
        <span className={style.address}><b>Lieferadresse: </b>{`${address.delivery_street} ${address.delivery_number}, ${address.delivery_place}`}</span>
        <br/>
        <br/>
      </div>;});

    return (
      <div className={style.root}>
        <div className="container u-full-width u-max-full-width">
          <h4>Stopps erstellen</h4>
          <div className="row">
            <div className="six columns">
              <div className={style.form}>
                <input type="text"  name="pickup_street" className={style.streetname} placeholder={"Straße Abholung"} onChange={this.handleChange}/>
                <input type="text"  name="pickup_number" className={style.number} placeholder={"Nr."} onChange={this.handleChange}/>
                <input type="text"  name="pickup_place" className={style.place} placeholder={"Ort Abholung"} onChange={this.handleChange}/>
                <input type="text"  name="delivery_street" className={style.streetname} placeholder={"Straße Lieferung"} onChange={this.handleChange}/>
                <input type="text"  name="delivery_number" className={style.number} placeholder={"Nr."} onChange={this.handleChange}/>
                <input type="text"  name="delivery_place" className={style.place} placeholder={"Ort Lieferung"} onChange={this.handleChange}/>
                <button className={style.submit} onClick={this.handleSubmit}>Add Stopp</button>
                <button className={style.delete} onClick={this.handleDeletion}>Delete Stopp</button>
              </div>
            </div>
            <div className="six columns">
              <div className={style.list}>
                <h6 className={style.headLineList}>Stopps:</h6>
                {addressList}
              </div>
            </div>
          </div>
        </div>
      </div>
    );


  }
}

export default CreateStopps;
