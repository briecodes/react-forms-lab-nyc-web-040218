import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  updateState = (value) => {
    this.setState({
      poem: value,
      warning: ""
    })
  }

  poemCheck = (e) => {
    this.updateState(e.target.value);

    if (this.lineArray().length === 3 && this.wordCount(0) === 5 && this.wordCount(1) === 3 && this.wordCount(2) === 5 && this.state.poem !== ''){
      console.log("this is valid.");
    }else{
      this.setState({
        warning: "This poem is not written in the right structure!"
      })
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
        <div id="poem-validation-error" style={{ color: "red" }}>
          {this.state.warning}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
