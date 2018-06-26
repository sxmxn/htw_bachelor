import React, { Component } from 'react';

import style from './index.module.css'

class OptimizationGoalForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
    };

    this.handleValueOfDropDown = this.handleValueOfDropDown.bind(this);
  }

  handleValueOfDropDown(event){
    switch (event.target.value) {
      case '1':
        this.props.sendData(
          {
            type: "min-max",
            value: "transport_time"
          });
        break;
      case '2':
        this.props.sendData({
          type: "min-max",
          value: "completion_time"
        });
        break;
      case '3':
        this.props.sendData({
          type: "min",
          value: "vehicles"
        });
        break;
    }

  }


  render() {
    return (
      <div className={style.root}>
      <div className="container">
        <h4>Optimierungsziel</h4>
        <div className="row">
        </div>
          <div className="row">
            <div className="twelve columns">
              <div className={style.goal}>
                <select className="u-full-width" onChange={this.handleValueOfDropDown}>
                  <option value="" disabled selected hidden>Select your goal</option>
                  <option value='1'>transport time</option>
                  <option value='2'>completion time</option>
                  <option value='3'>minimizes vehicles</option>
                </select>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default OptimizationGoalForm;