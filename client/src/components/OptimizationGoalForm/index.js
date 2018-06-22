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
      case 'speed':
        this.props.sendData({optimizationGoal: 0});
        break;
      case 'capacityUtilisation':
        this.props.sendData({optimizationGoal: 1});
        break;
    }

  }


  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="twelve columns">
              <label>
                Optimierungsziel:
                <select className="u-full-width" onChange={this.handleValueOfDropDown}>
                  <option value="" disabled selected hidden>Select your optimization goal</option>
                  <option value='speed'>Geschwindigkeit</option>
                  <option value='capacityUtilisation'>Fahrzeugsauslastung</option>
                </select>
              </label>
            </div>
          </div>
      </div>
    );
  }
}

export default OptimizationGoalForm;