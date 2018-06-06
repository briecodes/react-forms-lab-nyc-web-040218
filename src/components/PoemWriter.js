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
      valid: this.isValid(value)
    })
  }

  poemCheck = (e) => {
    this.updateState(e.target.value);
  }

  isValid = (poem) => {
    if (this.lineArray(poem).length === 3 && this.lineArray(poem)[0].trim().split(" ").length === 5 && this.lineArray(poem)[1].trim().split(" ").length === 3 && this.lineArray(poem)[2].trim().split(" ").length === 5 && poem !== "") {
      return true
    } else {
      return false
    }
  }

  lineArray = (poem) => {
    // var text = poem.replace(/\s+$/g, "")
    var text = poem.replace(/  +/g, ' ');
    var split = text.split("\n")
    return split
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.poemCheck} value={this.state.poem} />
        { this.state.valid ? null : (<div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>) }
      </div>
    );
  }
}

export default PoemWriter;
