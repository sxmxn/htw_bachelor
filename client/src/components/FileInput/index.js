import React, { Component } from 'react';

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
      let jsonObj = JSON.parse(event.target.result);
      alert(jsonObj);
      console.log(jsonObj)
    }

    console.log(reader)

    this.state.input.push(this.fileInput.current.files[0])
    console.log(this.state.input)

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