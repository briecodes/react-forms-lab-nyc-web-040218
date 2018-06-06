import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: true
    };
  }

  updateState = (value) => {
    this.setState({
      poem: value,
      valid: this.isValid(),
      warning: ""
    })
  }

  poemCheck = (e) => {
    this.updateState(e.target.value);
  }

  isValid = () => {
    if (this.lineArray().length === 3 && this.wordCount(0) === 5 && this.wordCount(1) === 3 && this.wordCount(2) === 5 && this.state.poem !== '') {
      return true
    } else {
      return false
    }
  }

  lineArray = () => {
    var text = this.state.poem.replace(/\s+$/g, "")
    var split = text.split("\n")
    return split
  }

  wordCount = (line) => {
    let wordArr = this.lineArray()[line].split(" ");
    return wordArr.length;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.poemCheck} value={this.state.poem} />
        { !this.state.valid ? (<div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>) : null }
      </div>
    );
  }
}

export default PoemWriter;
