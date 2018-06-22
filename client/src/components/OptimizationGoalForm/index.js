import React, { Component } from 'react';

class OptimizationGoalForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      optimizationGoal: 0
    };

    this.handleValueOfDropDown = this.handleValueOfDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleValueOfDropDown(event){
    switch (event.target.value) {
      case 'speed':
        this.setState({optimizationGoal: 0});
        break;
      case 'capacityUtilisation':
        this.setState({optimizationGoal: 1});
        break;
    }

  }

  handleSubmit(event){
    //console.log(this.state)
    this.props.sendData(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="twelve columns">
              <label>
                Optimierungsziel:
                <select className="u-full-width"  onChange={this.handleValueOfDropDown}>
                  <option value='speed'>Geschwindigkeit</option>
                  <option value='capacityUtilisation'>Fahrzeugsauslastung</option>
                </select>
              </label>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default OptimizationGoalForm;