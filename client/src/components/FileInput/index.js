import React, { Component } from 'react';

let jsonObj;

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      input: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();

    const reader = new FileReader();
    reader.readAsText(this.fileInput.current.files[0]);

    reader.onload = function(event) {
      jsonObj= JSON.parse(event.target.result);

    };

    reader.onloadend = function(){
      console.log(jsonObj)
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;