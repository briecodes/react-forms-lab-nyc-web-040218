import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      remainingChars: 0
    };
  }

  validate = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.validate} type="text" value={this.state.message} /><div id="amount">{this.props.maxChars - this.state.message.length} characters left</div>
      </div>
    );
  }
}

export default TwitterMessage;
