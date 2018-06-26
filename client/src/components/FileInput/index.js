import React, { Component } from 'react';
import Files from "react-files";

let jsonObj;

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
    }

    this.fileReader = new FileReader();
    this.fileReader.onload = (event) => {

      this.setState({input: JSON.parse(event.target.result)}, () => {
        console.log(this.state.input);
      });
    };

  }

  render() {
    return (
        <div className="files">
          <Files
            className="files-dropzone"
            onChange={file => {
              this.fileReader.readAsText(file[0]);
            }}
            onError={err => console.log(err)}
            accepts={[".json"]}
            multiple
            maxFiles={3}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Drop files here or click to upload
          </Files>
        </div>
    );
  }
}

export default FileInput;